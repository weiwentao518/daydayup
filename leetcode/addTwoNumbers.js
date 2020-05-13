function ListNode(val, next = null) {
  this.val = val
  this.next = next
}

var addTwoNumbers = function(l1, l2) {
  let res = ''
  let arr1 = []
  let arr2 = []
  let node1 = l1
  let node2 = l2
  while(node1 || node2) {
    node1 && arr1.push(node1.val)
    node1 && (node1 = node1.next)

    node2 && arr2.push(node2.val)
    node2 && (node2 = node2.next)
  }

  let len = arr1.length > arr2.length ? arr2.length : arr1.length
  let arrLong = arr1.length < arr2.length ? arr2 : arr1
  let carry = 0

  for (let i = 0; i < arrLong.length; i ++) {
    if (i < len) {
      const sum = Number(arr1[i]) + Number (arr2[i]) + carry
      if (sum >= 10) {
        res += String(sum % 10)
        carry = 1
      } else {
        res += String(sum)
        carry = 0
      }
    } else {
      const sum = Number(arrLong[i]) + carry
      if (sum >= 10) {
        res += String(sum % 10)
        carry = 1
      } else {
        res += String(sum)
        carry = 0
      }
    }
  }

  if (carry) {
    res += carry
  }

  console.log({
    res
  })

  res = res.split('')

  var str = ''

  for (let i = 0; i < res.length; i++) {
    str += `new ListNode(${res[i]}, `
  }
  for (let i = 0; i < res.length; i++) {
    str += ')'
  }

  console.log({
    str
  })

  return eval(str)
}

var node1 = new ListNode(1, new ListNode(8))
// new ListNode(2, new ListNode(4, new ListNode(3)))
// [2, 4, 3]
var node2 = new ListNode(0)
// new ListNode(5, new ListNode(6, new ListNode(4)))
// [5, 6, 4]

var node = addTwoNumbers(node1, node2)

console.log({
  node
})
