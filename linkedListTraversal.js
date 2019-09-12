class Node {
    constructor(data, next = null) {
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
  
      if(!this.head) {
        this.head = node;
      } else {
        current = this.head;
  
        while(current.next) {
          current = current.next;
        }
  
        current.next = node;
      }
      this.size++;
    }
  
    //Get nth node. Here, I assigned the HEAD to the TALE, so the last
    //node is now the first, so we can start counting.
    getNthLastNode(index) {
      let tail = this.head;
      let count = 0;
  
      while(tail) {
        if (count == index) {
          return tail.data
        }
        count++;
        tail = tail.next;
      }
  
      return null;
    }
  }
  
  const myLinkedList = new LinkedList();
  
  myLinkedList.insertFirst(1);
  for(let i = 2; i<=10; i++){
    myLinkedList.insertNext(i);
  }
  
  myLinkedList.getNthLastNode(5)
  