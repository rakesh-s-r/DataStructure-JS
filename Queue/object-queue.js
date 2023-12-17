class Queue {
    constructor() {
      this.item = {};
      this.front = 0;
      this.rear = 0;
    }
  
    // push item to end of array
    enqueue(value) {
      this.item[this.rear] = value;
      this.rear++;
    }
  
    // remove last pushed item; bcz queue is FILO or LIFO
    dequeue() {
      const item = this.item[this.front];
      delete this.item[this.front];
      this.front++;
      return item;
    }
  
    // Peek means item to be removed
    peek() {
      return this.item[this.front];
    }
  
    print() {
      console.log(this.item);
    }
  
    size() {
      return this.rear - this.front;
    }
  }
  
  const queue = new Queue();
  console.log(queue.size()); // 0
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  console.log(queue.peek()); // 10
  console.log(queue.size()); // 3
  console.log(queue.dequeue()); // 10
  console.log(queue.print()); // 20, 30
  