class Node {
    constructor (data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Inserting the first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++; 
  }

  //Inserting the next node
  insertNext(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  //Get nth node from the end.
  getNthLastNode(index){
    let node = this.head;
    let i = 1;
    let nthNode;

    if (index <= 0) {
      return null;
    } 
    
    while (node) {
      if (i == index) { 
        nthNode = this.head;
      } else if (i - index > 0) {
        nthNode = nthNode.next;
      }
      i++;
      node = node.next;
    }
  return nthNode;
  }

  //Get nth node from the end using 2 pointers
  getNthLastNodeNew(index){
    let firstPointer = this.head;
    let secondPointer = this.head;
    let i = 1;

    for (i = 1; i < index; i++) {
      if(firstPointer == null) {
        return null;
      }
      firstPointer = firstPointer.next;
    }

    while(firstPointer.next != null) {
      firstPointer = firstPointer.next;
      secondPointer = secondPointer.next;
    }
  return secondPointer;
  }
}

const myLinkedList = new LinkedList();
  