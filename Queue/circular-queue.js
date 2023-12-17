class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  enqueue(value) {
    if (this.isFull()) {
      return "Full";
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = value;
    this.currentLength += 1;
    if (this.front === -1) {
      this.front = this.rear;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "No items left";
    }
    const items = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }
    return items;
  }

  isEmpty() {
    return this.currentLength == 0;
  }

  isFull() {
    return this.currentLength == this.capacity;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      return "No itemss found";
    }
    let i;
    let str = "";
    for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
      str += this.items[i] + " ";
    }
    str += this.items[i];
    console.log(str);
  }
}

const circularQueue = new CircularQueue(5);
console.log(circularQueue.isEmpty());
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);
circularQueue.print();

console.log(circularQueue.dequeue());
console.log(circularQueue.peek());
circularQueue.enqueue(60);
circularQueue.print();
