# Career Explorer

A static, elementary-friendly RIASEC career-interest explorer for TK through Grade 5.

## How results work

Each response is scored directly: **Yes = 3**, **Kind of = 2**, **Not really = 1**, and **Nope = 0**. Every grade band asks the same number of questions for each of the six RIASEC areas. Results are percentages of the available points in each area, and exact ties remain tied. The activity is an exploration aid, not a validated aptitude test or career prediction.

## Local checks

Install Node.js 22 or newer, then run:

```sh
npm ci
npm test
```

The test suite checks scoring behavior, balanced questions, complete career references, local links/assets, privacy and accessibility contracts, shared source metadata, HTML validity, and social-preview size. GitHub Actions runs the same checks for pull requests and pushes to `main`.

For a browser check, serve the directory locally:

```sh
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Updating career information

Career profiles for all grade bands live in `career-data.js`; do not copy profile objects back into the HTML pages. Review pay, training, and outlook language against the [U.S. Bureau of Labor Statistics Occupational Outlook Handbook](https://www.bls.gov/ooh/occupation-finder.htm), then update `source.wageDataYear` and `source.reviewed` in that file. Pay ranges shown to children are approximate and should not be presented as guarantees.

## Privacy and accessibility

The site uses system fonts and local assets, so opening an assessment does not automatically contact a web-font provider. Keep all controls keyboard-operable, preserve the native assessment progress element and descriptive labels, and retest at a 375-pixel viewport after visual changes.
