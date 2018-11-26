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
  let l3 = new ListNode()
  let l4 = l3
  let exact = 0
  while (l1 != null || l2 != null || exact === 1) {
    let sum = exact
    if (l1 != null) {
      sum += l1.val
      l1 = l1.next
    }
    if (l2 != null) {
      sum += l2.val
      l2 = l2.next
    }
    let node = new ListNode(sum % 10)
    l4.next = node
    l4 = l4.next
    exact = sum > 9 ? 1 : 0
  }
  return l3.next
};