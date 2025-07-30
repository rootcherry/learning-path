// 10 -> 5 -> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;
    return this;
  }

  // insert() - my solution
  // insert(index, value) {
  //   const newNode = new Node(value);
  //   if (index === 0) {
  //     this.prepend(value);
  //     return this;
  //   }

  //   let node = this.head;
  //   let counter = 0;

  //   while (node != null) {
  //     if (counter === index - 1) {
  //       newNode.next = node.next;
  //       node.next = newNode;
  //       this.length++;
  //       break;
  //     }
  //     counter++;
  //     node = node.next;
  //   }
  //   return this;
  // }

  insert(index, value) {
    // check params
    if (index >= this.length) {
      return this.append(value);
    }

    const node = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = node;
    node.prev = leader;
    node.next = follower;
    follower.prev = node;
    this.length++;
    console.log(this);
    return console.log(this.printList());
  }

  // remove() - my solution
  // remove(index) {
  //   if (index === 0) {
  //     this.head = this.head.next;
  //     this.length--;
  //     return console.log(this.printList());
  //   }
  //   const previous = this.traverseToIndex(index - 1);
  //   previous.next = previous.next.next;
  //   this.length--;
  //   return console.log(this.printList());
  // }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) {
      const newHead = this.head.next;
      if (newHead) newHead.prev = null;
      this.head = newHead;
      this.length--;
      return console.log(this.printList());
    }

    const nodeToRemove = this.traverseToIndex(index);
    const beforeNode = nodeToRemove.prev;
    const afterNode = nodeToRemove.next;

    if (beforeNode) beforeNode.next = afterNode;
    if (afterNode) afterNode.prev = beforeNode;

    if (index === this.length - 1) {
      this.tail = beforeNode;
    }

    this.length--;
    return this.printList();
  }

  traverseToIndex(index) {
    // check params
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLinkedList = new DoublyLinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
// myLinkedList.remove(2);
// myLinkedList.remove(2);
// myLinkedList.printList();

// console.log(myLinkedList);
