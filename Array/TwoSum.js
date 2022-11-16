/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              arr.push(i, j)
          }
      }
  }
  return arr;
};

/**
 * Testcases
 * nums = [2, 7, 11, 15]
 * target = 9
 * Output = [0, 1]
 * 
 * nums = [3, 2, 4]
 * target = 6
 * Output = [1, 2]
 * 
 * nums = [3,3]
 * target = 6
 * Output = [0, 1]
 * 
 */
