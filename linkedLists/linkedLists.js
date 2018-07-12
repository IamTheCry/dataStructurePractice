class ListNode {
  constructor(value=null, next=null, prev=null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
    this.insert = (value) => {
      let newNode = new ListNode(value);
      newNode.next = this.next;
      this.next = newNode;asdasd
    };
  };
};

class linkedList {
  constructor(head=null, tail=null) {
    this.head = head;
    this.tail = tail;
    this.addToHead = (value) => {
      let newHead = new ListNode(value);
      if(!this.head) {
        this.head = newHead;
        this.tail = newHead;
      } else {
        newHead.next = this.head;
        this.head.prev = newHead;
        this.head = newHead;
      }
    };
  }
}
