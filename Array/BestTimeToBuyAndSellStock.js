/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let firstVal = prices[0];
  let maxDifference = 0;

  for (let i = 1; i < prices.length; i++) {
      if (prices[i] > firstVal && (prices[i] - firstVal) > maxDifference) {
          maxDifference = prices[i] - firstVal;
      }
      if (prices[i] < firstVal) {
          firstVal = prices[i]
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