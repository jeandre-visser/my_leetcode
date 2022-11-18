/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  // USe XOR to get number that only occurs once
  return nums.reduce((a,b) => a^b)
};

// Test cases
/**
 * nums = [2,2,1]
 * output 1
 * 
 * nums = [4,1,2,1,2]
 * output 4
 * 
 * nums = [1]
 * output 1
 */