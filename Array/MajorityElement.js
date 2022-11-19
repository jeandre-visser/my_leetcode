/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  nums.sort((a, b) => {
      return a - b;
  });
  return nums[Math.floor(nums.length / 2)];
};

// Test cases
/**
 * nums = [3, 2, 3]
 * output 3
 * 
 * nums = [2, 2, 1, 1, 1, 2, 2]
 * output 2
 */