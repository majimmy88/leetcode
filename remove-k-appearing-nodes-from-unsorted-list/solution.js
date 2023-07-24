// k = 3 
// 1 > 2 > 4 > 5 > 7 > 8
class Node {
  constructor (val = 0, next = null) {
    this.val = val
    this.next = next;
  }
} 

function arrayify(head) {
  let ptr = head
  var array = []
  while (ptr != null) {
      array.push(ptr.val)
      ptr = ptr.next
  }
  return array
}

const removeDup = (node, k) => {
  // console.log(node)
  let count = 1
  let curr = node
  let result = curr
  while(curr !== null) {
    if((count + 1) % 3  === 0 && curr.next.next) {
      curr.next = curr.next.next
      curr.value = curr.next.value
      count++
    }
    if ((count + 1) % 3  === 0 && curr.next.next === null ){
      curr.next = null
    }
    curr = curr.next
    count++
  }
  return result
}



var listOne = new Node(1, new Node(2, new Node(3)))
var listTwo = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6, new Node(7)))))))
// const l1 = removeDup(listOne, 3)
const l2 = removeDup(listTwo, 3)
// const l3 = removeDup(listTwo, 2)
console.log(arrayify(l2))
