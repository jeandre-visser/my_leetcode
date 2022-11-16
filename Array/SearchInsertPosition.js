/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  if (nums.includes(target)) { 
      return nums.indexOf(target); 
  } else {
      nums.push(target);
      nums.sort((a, b) => a - b)
      return nums.indexOf(target);
  }

};

/**
 * Testcases
 * nums = [1,3,5,6]
 * target = 5
 * Output = 2
 * 
 * nums = [1,3,5,6]
 * target = 2
 * Output = 1
 * 
 * nums = [1,3,5,6]
 * target = 7
 * Output = 4
 */