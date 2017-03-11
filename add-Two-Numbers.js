You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

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
var addTwoNumbers = function(l1, l2) {
    let node;
    let crawler;
    let num;
    let carry = 0
    while(l1 !== null && l2 !== null){
        if(!node){
            num = l1.val + l2.val
            if(num>=10){
                node = new ListNode(num-10);
                carry = 1
            }else{
               node = new ListNode(num); 
            }
            crawler = node
        }else{
            num = l1.val + l2.val
            if(num+carry>=10){
                num = (num+carry)-10
                crawler.next = new ListNode(num);
                carry = 1
            }else{
                crawler.next = new ListNode(num+carry);
                carry = 0
            }
            crawler = crawler.next
        }
        l1 = l1.next
        l2 = l2.next
    }
    if(l1) remain = l1
    else remain = l2
    while(remain !== null){
        if(remain.val + carry >= 10){
            carry = 1
            num = (remain.val+carry) - 10
            crawler.next = new ListNode(num)
        }else{
            crawler.next = new ListNode(remain.val+ carry)
            carry = 0
        }
            crawler = crawler.next
            remain = remain.next
        }
    if(carry !== 0){
        crawler.next = new ListNode(carry)
    }
    return node
};
