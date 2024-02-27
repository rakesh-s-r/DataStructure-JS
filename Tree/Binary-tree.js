// Binary tree have 2 node;

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.index = -1;
    this.a = [1, 2, 4, null, null, 5, null, null, 3, null, 6, null, null];
  }

  // Construct tree using pre-order means root, all left, all right
  buildTree() {
    this.index++;
    if (!this.a[this.index]) return null;
    let newNode = new Node(this.a[this.index]);
    newNode.left = this.buildTree();
    newNode.right = this.buildTree();
    return newNode;
  }
}

const l = new Tree();
console.log(l.buildTree());
