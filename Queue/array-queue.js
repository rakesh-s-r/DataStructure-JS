class Queue {
    constructor() {
        this.item = [];
    }

    // push item to end of array
    enqueue(value) {
        this.item.push(value)
    }
    
    // remove last pushed item; bcz queue is FILO or LIFO
    dequeue() {
        if(!this.size()) {
            return null
        }
        return this.item.shift();
    }

    // Peek means item to be removed
    peek() {
        return this.item[0];
    }

    print() {
        console.log(this.item.toString())
    }

    size() {
        return this.item.length;
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
console.log(queue.print());// 20, 30
