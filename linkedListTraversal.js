class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Inserting the first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++; 
  }

  //Inserting the next node
  insertNext(data) {
    let node = new Node(data);
    let current;

    if(!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  //Get nth node
  getNthNode(index) {
    let tail = this.head;
    let count = 0;

    while(tail) {
      if (count == index) {
        console.log(tail.data)
      }
      count++;
      tail = tail.next;
    }

    return null;
  }

  //Print list data
  printListData() {
    let current = this.head;

    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const myLinkedList = new LinkedList();

myLinkedList.insertFirst(1);
myLinkedList.insertNext(2);
myLinkedList.insertNext(3);
myLinkedList.insertNext(4);
myLinkedList.insertNext(5);
myLinkedList.insertNext(6);
myLinkedList.insertNext(7);
myLinkedList.insertNext(8);
myLinkedList.insertNext(9);
myLinkedList.insertNext(10);

myLinkedList.printListData();

myLinkedList.getNthNode(5)