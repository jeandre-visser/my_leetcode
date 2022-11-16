/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

/**
 * Testcase 1
 * nums = [3,2,2,3]
 * val = 3
 * Output [2,2]
 * 
 * Testcase 2
 * nums = [0,1,2,2,3,0,4,2]
 * val = 2
 * Output [0,1,3,0,4]
*/ 
