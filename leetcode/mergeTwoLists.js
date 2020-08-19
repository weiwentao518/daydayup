/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if(l1 === null){
      return l2;
  }
  if(l2 === null){
      return l1;
  }
  if(l1.val < l2.val){
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
  }else{
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
  }
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
const item3 = new ListNode(4)
const item2 = new ListNode(2, item3)
const list1 = new ListNode(1, item2)

const item4 = new ListNode(4)
const item5 = new ListNode(3, item4)
const list2 = new ListNode(1, item5)

const res = mergeTwoLists(list1, list2)

console.log(res)