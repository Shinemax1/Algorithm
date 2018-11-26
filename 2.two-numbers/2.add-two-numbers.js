/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (29.50%)
 * Total Accepted:    649.9K
 * Total Submissions: 2.2M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const l3 = new ListNode()
  let arr1 = []
  let arr2 = []
  const s = (l1, l2) => {
    arr1.push(l1.val);
    arr2.push(l2.val);
    (l1.next || l2.next) && s(l1.next || (l1.next = new ListNode(0)), l2.next || (l2.next = new ListNode(0)));
  }
  s(l1, l2)
  let arr3 = []
  // arr1 = []
  let max = Math.max(arr1.length, arr2.length)
  arr1 = [...arr1, ...new Array(max - arr1.length).fill(0)]
  arr2 = [...arr2, ...new Array(max - arr2.length).fill(0)]
  // console.log(arr1, arr2)
  arr1.reduce((a, b, i) => {
    let m = a.shift() + b
    arr3.push(m % 10);
    console.log(a[0])
    m >= 10 && ((a[0] || a[0] === 0) ? (++a[0]) : arr3.push(1));
    return a
  }, arr2);
  // console.log(arr3)
  const d = (l3, arr) => {
    l3.val = arr.shift();
    arr.length > 0 && (l3.next = d(new ListNode(), arr))
    return l3
  }
  d(l3, arr3)
  return l3
};