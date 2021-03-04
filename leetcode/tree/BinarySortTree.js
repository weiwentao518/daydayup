class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class Utils {
  static insertNode(node, newNode) {
    if (node.key > newNode.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  static getMinNode(node) {
    while(node && node.left !== null) {
      node = node.left
    }

    return node.key
  }

  static getMaxNode(node) {
    while(node && node.right !== null) {
      node = node.right
    }

    return node.key
  }

  static searchNode(node, key) {
    if (node === null) {
      return false
    }

    if (node.key > key) {
      return this.searchNode(node.left, key)
    } else if (node.key < key) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }

  static inOrderTrNode(node, callback) {
    if (node) {
      this.inOrderTrNode(node.left, callback)
      callback(node.key)
      this.inOrderTrNode(node.right, callback)
    }
  }

  static preOrderTrNode(node, callback) {
    if (node) {
      callback(node.key)
      this.inOrderTrNode(node.left, callback)
      this.inOrderTrNode(node.right, callback)
    }
  }

  static lastOrderTrNode(node, callback) {
    if (node) {
      this.inOrderTrNode(node.left, callback)
      this.inOrderTrNode(node.right, callback)
      callback(node.key)
    }
  }
}

class BinarySortTree {
  constructor () {
    this.root = null
  }

  insert(key) {
    const newNode = new Node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      Utils.insertNode(this.root, newNode)
    }
  }

  min() {
    return Utils.getMinNode(this.root)
  }

  max() {
    return Utils.getMaxNode(this.root)
  }

  has(key) {
    return Utils.searchNode(this.root, key)
  }

  inOrderTraverse(callback) {
    Utils.inOrderTrNode(this.root, callback)
  }

  preOrderTraverse(callback) {
    Utils.preOrderTrNode(this.root, callback)
  }

  lastOrderTraverse(callback) {
    Utils.lastOrderTrNode(this.root, callback)
  }
}

const tree = new BinarySortTree()

tree.insert(10)
tree.insert(9)
tree.insert(11)
tree.insert(8)
tree.insert(3)
tree.insert(7)
tree.insert(13)
tree.insert(18)

const printKey = (key) => {
  console.log(key)
}

tree.inOrderTraverse(printKey)

console.log(tree)

console.log('min is:', tree.min())
console.log('max is:', tree.max())

console.log('has 5', tree.has(5))
console.log('has 7', tree.has(7))