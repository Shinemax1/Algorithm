/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 *
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (40.38%)
 * Total Accepted:    273.8K
 * Total Submissions: 678.2K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * Given n non-negative integers a1, a2, ..., an , where each represents a
 * point at coordinate (i, ai). n vertical lines are drawn such that the two
 * endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together
 * with x-axis forms a container, such that the container contains the most
 * water.
 * 
 * Note: You may not slant the container and n is at least 2.
 * 
 * 
 * 
 * 
 * 
 * The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In
 * this case, the max area of water (blue section) the container can contain is
 * 49. 
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * 
 * Input: [1,1,1,2,1,1,2]
 * Output: 6
 * 
 */
/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function (height) {
//   let i = 0,
//     max = 0,
//     j = 0,
//     fn = (i) => {
//       let arr = height.slice(i + 1)
//       j = arr.indexOf(Math.max(height[i], ...arr))
//       if (height[i] === arr[j]) {
//         j = arr.lastIndexOf(arr[j])
//       } else if (j === -1) {
//         j = arr.length - 1
//       }
//       max = Math.max(max, (j + 1) * Math.min(height[i], arr[j]))
//       return j + i + 1
//     }

//   while (i < height.length - 1) {
//     i = fn(i)
//   }
//   return max
// };
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
var maxArea = function (height) {
  let i = 0,
    max = 0,
    k = height.length - 1
  while (i < k) {
    max = Math.max(max, Math.min(height[i], height[k]) * (k - i))
    if(height[i] < height[k]){
      i++
    }else{
      k--
    }
  }
  return max
};