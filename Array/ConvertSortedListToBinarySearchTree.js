/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;

  let middle = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[middle]);
  root.left = sortedArrayToBST(nums.slice(0, middle));
  root.right = sortedArrayToBST(nums.slice(middle + 1));
  return root;
};

/**
 * Testcase 1
 * nums = [-10,-3,0,5,9]
 * Output [0,-3,9,-10,null,5]
 * 
 * Testcase 2
 * nums = [1,3]
 * Output [3,1]
*/ 