/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val, next) {
  this.val = val;
  this.next = next || null;
}
function Array2ListNode(arr) {
  return arr.reduceRight((list, item) => new ListNode(item, list), null)
}

var reverseList = function(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

const arr = [1, 2, 3, 4, 5]
const head = Array2ListNode(arr)
const res = reverseList(head)

console.log(JSON.stringify(res))