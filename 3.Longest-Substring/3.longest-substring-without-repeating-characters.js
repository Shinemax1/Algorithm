/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (25.33%)
 * Total Accepted:    643.6K
 * Total Submissions: 2.5M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 * 
 * 
 * 
 * 
 * 
 */
/** abcabcbb
 * @param {string} s
 * @return {number}
 * 
 * [...s]影响性能
 * 
 */

// 108ms
var lengthOfLongestSubstring = function (s) {
  const obj = {}
  let max = 0;
  let j = 0
  i = 0;
  while (j < s.length) {
    let v = s[j]
    if (obj.hasOwnProperty(v) && obj[v] >= i) {
      i = obj[v] + 1
    } else {
      max = Math.max(max,j - i + 1)
    }
    obj[v] = j++
  }
  return max
};



// 72ms
var lengthOfLongestSubstring = function(s) {
  let len = s.length;
  if(len === 0 || len === 1) return len;
  let longest = 0;
  let start = 0;
  
  for(let end = 0; end < s.length;end++) {
      const curr = s[end];
      const index = s.indexOf(curr, start);
      if (index >= start && index < end) {
          start = index + 1;
      } else {
          longest = Math.max(longest, end - start);
      }
  }
  
  return longest + 1;
};