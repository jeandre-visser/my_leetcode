/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let length = nums.length;
  for (let i = 0; i < length; i++) {
      if (nums[i] === 0) {
          nums.splice(i, 1);
          nums.push(0);
          length--;
          i--;
      }
  }
};

// Test cases
/**
 * nums = [0,1,0,3,12]
 * output [1,3,12,0,0]
 * 
 * nums = [0]
 * output [0]
 */