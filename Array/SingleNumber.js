/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  // USe XOR to get number that only occurs once
  return nums.reduce((a,b) => a^b)
};
