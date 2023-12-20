class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.tail = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  isEmpty() {
    return this.size === 0;
  }

  // Big-O: O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  insertAtPosition(value, pos) {
    if (pos >= 0 || pos < this.size) {
      if (pos == 0) {
        this.prepend(value);
      } else {
        const node = new Node(value);
        let prev = this.head;
        for (let i = 0; i < pos - 1; i++) {
          prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
      }
    }
    return;
  }

  removeAtIndex(index) {
    if (index < 0 && index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head.next = this.head.next;
    }
    this.size--;
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    removedNode = prev.next;
    prev.next = removedNode.next;
    return removedNode.value;
  }

  // Big-O: O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;

    // Without tail
    // const node = new Node(value);
    // if (this.isEmpty()) {
    //   this.head = node;
    // } else {
    //   let cur = this.head;
    //   while (cur.next) {
    //     cur = cur.next;
    //   }
    //   cur.next = node;
    // }
    // this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) return;
    const value = this.tail.value;
    if (this.size == 1) {
      this.tail = null;
      this.head = null;
    }
    let prev = this.tail;
    while (prev.next != tail) {
      prev = prev.next;
    }
    prev.next = null;
    this.tail = prev;
    size--;
    return value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = head.next;
      size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.ext && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  print() {
    if (this.isEmpty()) {
      return "No data found";
    }
    let cur = this.head;
    let list = "";
    while (cur) {
      list += cur.value + " ";
      cur = cur.next;
    }
    console.log(list);
  }

  search(value) {
    if (this.isEmpty()) {
      return null;
    }
    let cur = this.head;
    let i = 0;
    while (cur) {
      if (cur.value == value) {
        return i;
      } else {
        cur = cur.next;
        i++;
      }
    }
  }

  reverse() {
    let prev = null;
    let cur = this.head;
    while (cur) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    this.head = prev;
  }
}

const l = new LinkedList();
console.log(l.isEmpty());
l.append(10);
l.append(20);
l.append(30);
l.insertAtPosition(15, 1);
console.log(l.print());
// l.removeAtIndex(0);
console.log(l.print());
console.log(l.search(20));
console.log(l.reverse(20));
console.log(l.print());

module.exports = LinkedList;
