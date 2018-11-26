/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (29.26%)
 * Total Accepted:    255.5K
 * Total Submissions: 873K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 * 
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * 
 * And then read line by line: "PAHNAPLSIIGYIR"
 * 
 * Write the code that will take a string and make this conversion given a
 * number of rows:
 * 
 * 
 * string convert(string s, int numRows);
 * 
 * Example 1:
 * 
 * 
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 * 
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 * 
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if(numRows === 1){
    return s
  }
  const arr = []
  let i = 1
  let str = ''
  while (i < s.length + 1) {
    let a = (~~(arr.length / (numRows - 1)) * (2 * numRows - 2) + numRows)
    if (i % a < numRows - 1 && (i % a > 0) && i > numRows) {
      arr.push([])
      arr[arr.length - 1][numRows - 1 - i % a] = s[i - 1]
    } else {
      if ((i - 1) % (2 * numRows - 2) === 0) {
        arr.push([])
      }
      arr[arr.length - 1].push(s[i - 1])
    }
    i++
  }
  let m = 0
  while (m < numRows) {
    arr.forEach(v => {
      str += v[m] || ''
    })
    m++
  }
  return str
};