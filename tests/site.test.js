const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const QUIZ_FILES = ['tk-k.html', 'grades1-2.html', 'grades3-5.html'];
const ALL_PAGES = ['index.html', ...QUIZ_FILES, 'careers.html'];

function read(file) {
  return fs.readFileSync(path.join(ROOT, file), 'utf8');
}

function extractExpression(source, startToken, endToken) {
  const start = source.indexOf(startToken);
  const end = source.indexOf(endToken, start);
  assert.notEqual(start, -1, `Missing ${startToken}`);
  assert.notEqual(end, -1, `Missing ${endToken}`);
  return source.slice(start + startToken.length, end).trim().replace(/;$/, '');
}

function loadSharedData() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(read('career-data.js'), context);
  return context.window.CareerExplorerData;
}

function loadScoring() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(read('scoring.js'), context);
  return context.window.CareerExplorerScoring;
}

test('every grade band gives equal evidence to all six RIASEC categories', () => {
  const expectedPerCategory = {
    'tk-k.html': 3,
    'grades1-2.html': 3,
    'grades3-5.html': 4
  };

  for (const file of QUIZ_FILES) {
    const source = read(file);
    const questions = Function(`return (${extractExpression(source, 'const QUESTIONS = ', '\n];')}\n]);`)();
    const counts = Object.fromEntries(['R', 'I', 'A', 'S', 'E', 'C'].map((code) => [code, 0]));
    for (const question of questions) counts[question.riasec] += 1;
    assert.deepEqual(Object.values(counts), Array(6).fill(expectedPerCategory[file]), `${file} has unequal category counts`);
  }
});

test('student choices determine results and exact ties remain ties', () => {
  const { calculateResults, calculateAllResults } = loadScoring();
  const counts = { R: 3, I: 3, A: 3, S: 3, E: 3, C: 3 };

  const socialOnly = calculateResults({ R: 0, I: 0, A: 0, S: 9, E: 0, C: 0 }, counts);
  assert.equal(socialOnly.length, 1);
  assert.equal(socialOnly[0].code, 'S');
  assert.equal(socialOnly[0].percentage, 100);

  const allEqual = calculateResults({ R: 6, I: 6, A: 6, S: 6, E: 6, C: 6 }, counts);
  assert.equal(allEqual.length, 6);
  assert.ok(allEqual.every((result) => result.rank === 1 && result.tied));

  const visibleScores = calculateAllResults({ R: 9, I: 6, A: 3, S: 0, E: 0, C: 0 }, counts)
    .map((result) => Math.round(result.percentage));
  assert.deepEqual(Array.from(visibleScores), [100, 67, 33, 0, 0, 0]);
});

test('every career referenced by every results category exists', () => {
  const shared = loadSharedData();
  const dataKey = {
    'tk-k.html': 'tkk',
    'grades1-2.html': 'grades12',
    'grades3-5.html': 'grades35'
  };

  for (const file of QUIZ_FILES) {
    const source = read(file);
    const riasec = Function(`return (${extractExpression(source, 'const RIASEC = ', '\n\nconst CAREERS')});`)();
    const careers = shared.careers[dataKey[file]];
    for (const [code, category] of Object.entries(riasec)) {
      for (const careerId of category.jobs) {
        assert.ok(careers[careerId], `${file} ${code} references missing career ${careerId}`);
      }
    }
  }
});

test('career content has one shared source with review metadata', () => {
  const shared = loadSharedData();
  assert.match(shared.source.url, /^https:\/\/www\.bls\.gov\/ooh\//);
  assert.equal(shared.source.reviewed, 'July 2026');
  assert.equal(shared.source.wageDataYear, '2024');
  for (const file of QUIZ_FILES) {
    assert.doesNotMatch(read(file), /const CAREERS = \{/, `${file} duplicates career records`);
  }
});

test('all local page assets and links resolve', () => {
  for (const file of ALL_PAGES) {
    const source = read(file);
    for (const match of source.matchAll(/(?:href|src)=["']([^"']+)["']/g)) {
      const value = match[1];
      if (/^(?:https?:|data:|#)/.test(value) || value.includes('${')) continue;
      const localPath = value.split(/[?#]/)[0];
      if (!localPath) continue;
      assert.ok(fs.existsSync(path.resolve(ROOT, path.dirname(file), localPath)), `${file} references missing ${value}`);
    }
  }
});

test('privacy and accessibility contracts stay in place', () => {
  for (const file of ALL_PAGES) {
    const source = read(file);
    assert.doesNotMatch(source, /fonts\.googleapis\.com|fonts\.gstatic\.com/, `${file} loads third-party fonts`);
    assert.doesNotMatch(source, /<button(?![^>]*\btype=)/, `${file} has a button without an explicit type`);
  }
  for (const file of QUIZ_FILES) {
    const source = read(file);
    assert.match(source, /aria-live="polite"/, `${file} does not announce results`);
    assert.match(source, /<progress\b/, `${file} has no accessible progress indicator`);
    assert.match(source, /aria-pressed="false"/, `${file} has no accessible answer state`);
  }
});

test('the optimized social preview is present and referenced', () => {
  const asset = path.join(ROOT, 'og-preview.jpg');
  assert.ok(fs.existsSync(asset));
  assert.ok(fs.statSync(asset).size < 500_000, 'Social preview should remain below 500 KB');
  for (const file of ALL_PAGES) {
    assert.match(read(file), /og-preview\.jpg/, `${file} is missing the optimized social preview metadata`);
  }
});
