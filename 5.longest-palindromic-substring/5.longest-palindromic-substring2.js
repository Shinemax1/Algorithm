/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (25.72%)
 * Total Accepted:    410.6K
 * Total Submissions: 1.6M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) {
    return s
  }
  let i = 0
  let index = 0
  let max = 1
  while ((s.length - 1 - i) * 2 >= max) {
    let k = i,
        j = i
    while (s[k+1] === s[k] && k<s.length-1) {
      k++
    }
    i=k+1
    while (s[k+1] === s[j-1] && k<s.length-1 && j>0) {
      k++
      j--
    }
    if (max < k-j+1) {
      index = j
      max = k-j+1
    }
  }
  return s.substr(index, max)
};