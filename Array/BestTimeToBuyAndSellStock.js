/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let lowestVal = prices[0];
  let maxDifference = 0;

  for (let i = 1; i < prices.length; i++) {
      if (prices[i] > lowestVal && (prices[i] - lowestVal) > maxDifference) {
          maxDifference = prices[i] - lowestVal;
      }
      if (prices[i] < lowestVal) {
          lowestVal = prices[i]
      }
  }
  return maxDifference;
};

// Testcases
/**
 * prices = [7,1,5,3,6,4]
 * output 5
 * 
 * prices = [7,6,4,3,1]
 *  output 0
 */