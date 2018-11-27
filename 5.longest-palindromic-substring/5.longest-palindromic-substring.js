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
  let newI = 1
  while ((s.length - 1 - i) * 2 >= max) {
    while (s[i - newI] === s[i + newI] && s[i - newI] && s[i + newI]) {
      newI++
    }
    if (max < 2 * newI - 1) {
      index = i
      max = 2 * newI - 1
    }
    newI = 1
    while (s[i - newI + 1] === s[i + newI] && s[i - newI + 1] && s[i + newI]) {
      newI++
    }
    if (max < 2 * newI - 2) {
      index = i
      max = 2 * newI - 2
    }
    newI = 1
    i++
  }
  return s.substr(index + 1 - Math.ceil(max / 2), max)
};