/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 *
 * https://leetcode.com/problems/integer-to-roman/description/
 *
 * algorithms
 * Medium (48.51%)
 * Total Accepted:    182.9K
 * Total Submissions: 376.4K
 * Testcase Example:  '3'
 *
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D
 * and M.
 * 
 * 
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 
 * For example, two is written as II in Roman numeral, just two one's added
 * together. Twelve is written as, XII, which is simply X + II. The number
 * twenty seven is written as XXVII, which is XX + V + II.
 * 
 * Roman numerals are usually written largest to smallest from left to right.
 * However, the numeral for four is not IIII. Instead, the number four is
 * written as IV. Because the one is before the five we subtract it making
 * four. The same principle applies to the number nine, which is written as IX.
 * There are six instances where subtraction is used:
 * 
 * 
 * I can be placed before V (5) and X (10) to make 4 and 9. 
 * X can be placed before L (50) and C (100) to make 40 and 90. 
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * 
 * 
 * Given an integer, convert it to a roman numeral. Input is guaranteed to be
 * within the range from 1 to 3999.
 * 
 * Example 1:
 * 
 * 
 * Input: 3
 * Output: "III"
 * 
 * Example 2:
 * 
 * 
 * Input: 4
 * Output: "IV"
 * 
 * Example 3:
 * 
 * 
 * Input: 9
 * Output: "IX"
 * 
 * Example 4:
 * 
 * 
 * Input: 58
 * Output: "LVIII"
 * Explanation: L = 50, V = 5, III = 3.
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: 1994
 * Output: "MCMXCIV"
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 * 
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let arr = [
      [1000, 'M'],
      [500, 'D'],
      [100, 'C'],
      [50, 'L'],
      [10, 'X'],
      [5, 'V'],
      [1, 'I']
    ],
    str = '',
    i = 0,
    obj = {}
  for (let m = 0; m < arr.length; m++) {
    for (let n = m + 1; n < arr.length; n++) {
      obj[arr[m][0] - arr[n][0]] = arr[n][1] + arr[m][1]
    }
  }
  console.log(obj)
  while (true) {
    
    str += new Array(~~(num / arr[i][0])).fill(arr[i][1]).join('')
    if (obj[num]) {
      
      return str+obj[num]
    }else if(num % arr[i][0] === 0){
      return str
    }else{
      num = num % arr[i][0]
      i++
    }
  }
};
console.log(intToRoman(1994))

// console.log(~~(1994/1000))