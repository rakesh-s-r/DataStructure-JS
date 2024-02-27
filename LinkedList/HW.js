class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
  }

  append(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = newNode;
    }
    return this.head;
  }

  prepend(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = newNode;
    else {
      let prev = this.head;
      this.head = newNode;
      this.head.next = prev;
    }
    return this.head;
  }

  deleteMiddleElement() {
    let slow = this.head;
    let fast = this.head.next.next;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    slow.next = slow.next.next;
    return this.head;
  }

  deleteNthNode(n) {
    let cur = this.head;
    let prev = null;
    let i = 0;
    while (cur) {
      i++;
      if (i === n) {
        if (prev) {
          let nextNode = cur.next;
          prev.next = nextNode;
        } else {
          this.head = this.head.next;
        }
        break;
      }
      prev = cur;
      cur = cur.next;
    }
    return this.head;
  }

  reverse() {
    let cur = this.head;
    let prev = null;
    while (cur) {
      let nextNode = cur.next;
      cur.next = prev;
      prev = cur;
      cur = nextNode;
    }
    this.head = prev;
    return this.head;
  }
}

const list = new List();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.prepend(5);
list.prepend(6); // 6 -> 5 -> 1 -> 2 -> 3 -> 4
// console.log(list.deleteMiddleElement());
console.log(list.reverse());
