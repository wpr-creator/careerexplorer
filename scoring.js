(function (global) {
  'use strict';

  const RIASEC_CODES = ['R', 'I', 'A', 'S', 'E', 'C'];

  /**
   * Turn a student's answers into honest, comparable RIASEC percentages.
   *
   * Categories are sorted only by the percentage earned from that student's
   * answers. Equal percentages keep the same rank. We return the strongest
   * three score bands, so an exact tie at a boundary is never hidden or broken
   * by an arbitrary category order.
   */
  function calculateAllResults(scores, counts) {
    return RIASEC_CODES.map((code) => {
      const answeredCount = counts[code] || 0;
      const maxScore = answeredCount * 3;
      const percentage = maxScore > 0 ? (scores[code] / maxScore) * 100 : 0;

      return {
        code,
        total: scores[code] || 0,
        count: answeredCount,
        maxScore,
        percentage
      };
    });
  }

  function calculateResults(scores, counts, scoreBandLimit = 3) {
    const allResults = calculateAllResults(scores, counts)
      .sort((a, b) => b.percentage - a.percentage);

    // Do not present a zero-score category as a "top interest" when the student
    // expressed at least one positive preference. If every category is zero,
    // keep all six as an honest tie instead of inventing a winner.
    const rankedPool = allResults.some((result) => result.percentage > 0)
      ? allResults.filter((result) => result.percentage > 0)
      : allResults;

    const scoreBands = [...new Set(rankedPool.map((result) => result.percentage))]
      .slice(0, scoreBandLimit);
    const included = rankedPool.filter((result) => scoreBands.includes(result.percentage));

    return included.map((result) => ({
      ...result,
      rank: scoreBands.indexOf(result.percentage) + 1,
      tied: included.filter((other) => other.percentage === result.percentage).length > 1
    }));
  }

  function rankLabel(result, noun) {
    const tieText = result.tied ? ' (TIE)' : '';
    return `#${result.rank} ${noun}${tieText}`;
  }

  global.CareerExplorerScoring = Object.freeze({
    RIASEC_CODES,
    calculateAllResults,
    calculateResults,
    rankLabel
  });
})(window);
