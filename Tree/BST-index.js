class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  // Without using recursion.
  // search(val, root) {
  //   if (!root) return false;
  //   let cur = root;
  //   while (cur) {
  //     console.log(val)
  //     if (cur.val === val) return true;
  //     else if (val < cur.val) cur = cur.left;
  //     else cur = cur.right;
  //   }
  //   return false;
  // }

  // DFS: 1
  preOrder(root) {
    // root, all left, all right
    if (root) {
      console.log("pre order traversal", root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  // DFS: 2
  inOrder(root) {
    //  all left, root, all right
    if (root) {
      this.inOrder(root.left);
      console.log("in order traversal", root.value);
      this.inOrder(root.right);
    }
  }

  // DFS: 3
  postOrder(root) {
    //  all left, all right, root
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  // BFS: 1
  levelOrder() {
    /** Use the optimized queue enqueue and dequeue from queue.js instead.
     * I've used an array for simplicity. */
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let cur = queue.shift();
      console.log(cur.value);
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
  }

  // find level
  heightOfTree() {
    let depth = 0;
    if (!this.root) return depth;
    const queue = [this.root];
    while (queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        const node = queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      depth++;
    }
    return depth;
  }

  // Alternative to find height maximum height connected
  // maxHeight(root) {
  //   if (!root) return 0;
  //   let leftHeight = this.maxHeight(root.left);
  //   let rightHeight = this.maxHeight(root.right);
  //   return Math.max(leftHeight, rightHeight) + 1;
  // }

  //Find longest diameter : nothing but longest path connected
  diameterOfBinaryTree(root) {
    let max = 0;
    const bfs = (root) => {
      if (!root) return 0;
      const leftT = bfs(root.left);
      const rightT = bfs(root.right);
      max = Math.max(leftT + rightT, max);
      return Math.max(leftT, rightT) + 1;
    };
    bfs(root);
    return max;
  }

  // Find 2 trees are same;
  isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
  }

  // if one tree is sub tree of another
  isSubtree = function (root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;
    if (isSameTree(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
  };

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  min(root) {
    while (root.left) {
      root = root.left;
    }
    return root.val;
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new BinarySearchTree();
// console.log(bst.isEmpty());
bst.insert(5);
bst.insert(3);
bst.insert(6);
bst.insert(2);
bst.insert(4);
bst.insert(null);
bst.insert(7);

// bst.insert(7);
// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 200));
// bst.preOrder(bst.root);
// bst.inOrder(bst.root);
// bst.postOrder(bst.root);
// bst.levelOrder();
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));
// bst.delete(5);
// bst.preOrder(bst.root);
bst.postOrder(bst.root);
// bst.levelOrder();
