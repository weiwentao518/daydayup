// Definition for singly-linked list.
function ListNode(val = 0, next = null) {
  this.val = val
  this.next = next
}
function ListNode2Array(list) {
  const arr = []
  while (list) {
    arr.push(list.val)
    list = list.next
  }
  return arr
}
function Array2ListNode(arr) {
  return arr.reduceRight((list, item) => new ListNode(item, list), null)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
};

// const L1 = new ListNode(1, new ListNode(2, new ListNode(3)))
// const L2 = new ListNode(1, new ListNode(3, new ListNode(4)))

const L1 = Array2ListNode([1, 2, 5, 8])
const L2 = Array2ListNode([3, 3, 3, 9])

console.log(JSON.stringify(L1))
console.log(JSON.stringify(L2))


const res = mergeTwoLists(L1, L2)
const arr = ListNode2Array(res)
console.log(arr)