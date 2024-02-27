class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.i = -1;
    this.a = [1, 2, null, 4, null, null, 5, 6];
  }

  insertBST(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertAtBST(this.root, newNode);
    }
  }

  insertAtBST(root, newNode) {
    if (newNode.val < root.val) {
      if (!root.left) {
        root.left = newNode;
      } else {
        root.left = this.insertAtBST(root.left, newNode);
      }
    } else {
      if (!root.right) {
        root.right = newNode;
      } else {
        root.right = this.insertAtBST(root.right, newNode);
      }
    }
    return root;
  }

  delete(val) {
    this.root = this.deleteBST(this.root, val);
  }

  min(root) {
    let cur = root;
    while (cur.left) {
      cur = cur.left;
    }
    return cur.val;
  }

  generateBinaryTree() {
    this.i++;
    if (!this.a[this.i]) return null;
    let newNode = new Node(this.a[this.i]);
    newNode.left = this.generateBinaryTree();
    newNode.right = this.generateBinaryTree();
    return newNode;
  }

  diameterOfTree(root) {
    let max = 0;
    const dfs = (root) => {
      if (!root) return 0;
      const left = dfs(root.left);
      const right = dfs(root.right);
      max = Math.max(left + right, max);
      return Math.max(left, right) + 1;
    };
    return max;
  }

  deleteBST(root, val) {
    if (!root) {
      return null;
    }
    if (val < root.val) {
      root.left = this.deleteBST(root.left, val);
    } else if (val > root.val) {
      root.right = this.deleteBST(root.right, val);
    } else {
      if (!root.left && root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      }
      if (!root.right) {
        return root.left;
      }
      root.val = this.min(root.right);
      root.right = this.deleteBST(root.right, root.val);
    }
    return root;
  }

  // DFS:1 -> all left, root, all right
  inOrderTraversal(root) {
    if (root) {
      this.inOrderTraversal(root.left);
      console.log(root.val);
      this.inOrderTraversal(root.right);
    }
  }
}

const tree = new BinaryTree();
tree.insertBST(10);
tree.insertBST(11);
tree.insertBST(9);
tree.insertBST(8);
// console.log(tree.root);
// tree.delete(9);
// console.log(tree.root);
// console.log(
//   tree.inOrderTraversal({
//     val: 1,
//     left: null,
//     right: {
//       val: 2,
//       left: {
//         val: 3,
//         left: null,
//         right: null,
//       },
//       right: null,
//     },
//   })
// );
// console.log(tree.generateBinaryTree());
