class Stack {
    constructor() {
        this.item = [];
    }

    // push item to end of array
    push(value) {
        this.item.push(value)
    }

    // remove last pushed item; bcz stack is FILO or LIFO
    pop() {
        if(!this.size()) {
            return 'Underflow'
        }
        return this.item.pop();
    }

    // Peek means item to be removed
    peek() {
        return this.item[this.item.length-1];
    }

    print() {
        console.log(this.item.toString())
    }

    size() {
        return this.item.length;
    }
}

const stack = new Stack();
console.log(stack.size());
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.print());
