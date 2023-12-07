class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null; //* Represents the top of the stack
    this.size = 0; //* Represents the number of elements in the stack
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top; //* Point the new node's next to the current top
    this.top = newNode; //* Update top to the new node
    this.size++; //* Increment the size of the stack
  }

  pop() {
    if (!this.top) return null; //* If stack is empty, return null

    const poppedValue = this.top.value; //* Store the value of the top node
    this.top = this.top.next; //* Move top to the next node
    this.size--; //* Decrement the size of the stack
    return poppedValue; //* Return the removed value
  }

  peek() {
    return this.top ? this.top.value : null; //* Return the value of the top node, or null if stack is empty
  }

  isEmpty() {
    return this.size === 0; //* Check if the stack is empty
  }

  getSize() {
    return this.size; //* Get the size of the stack
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Peek:", stack.peek());
console.log("Pop:", stack.pop());
console.log("Pop:", stack.pop());
console.log("Peek after pops:", stack.peek());

stack.push(40);
console.log("Peek after push:", stack.peek());
console.log(stack.size);
