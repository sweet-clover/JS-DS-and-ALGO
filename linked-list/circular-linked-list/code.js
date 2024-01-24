class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    prepend(value) {
        let node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
            this.tail.next = this.head
        } else {
            node.next = this.head
            this.head = node
            this.tail.next = this.head
        }
        this.size++
    }

    remove(){
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else{
            let current = this.head
            this.head = current.next
            this.tail.next = current.next
        }
        this.size--
    }


    print() {
        let current = this.head;
        if(current === null){
            console.log("List is empty")
        }else{
            do {
                current = current.next;
                console.log("cur", current.value, " => next ", current.next.value)
            } while (current !== this.head);
        }
    }

}

const list = new CircularLinkedList()
list.prepend('C')
list.prepend('B')
list.prepend('A')
list.print()

list.remove()
list.remove()
console.log("After remove")
list.print()

