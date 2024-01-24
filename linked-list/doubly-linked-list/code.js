class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    insertAt(position, value) {
        if (position >= 0 && position <= this.size) {
            let node = new Node(value)
            let current = this.head;
            let prev = null

            if (position === 0) {
                if(!this.head){
                    this.head = node
                    this.tail = node
                }else{
                    node.next = current
                    current.prev = node
                    this.head = node
                }
            } else if (position === this.size) {
                current = this.tail
                current.next = node
                node.prev = current
                this.tail = node
            } else {
                let i = 0;
                while (i < position) {
                    prev = current
                    current = current.next
                    i++
                }
                node.next = current
                prev.next = node
                
                current.prev = node
                node.prev = prev
            }
            this.size++
            return true
        } else {
            return false
        }
    }

    removeAt(position){
        if(position >= 0 && position < this.size){
            let current = this.head;
            let prev = null
            this.head = current.next

            if(position === 0){
                if(this.size === 1){
                    this.tail = null
                }else{
                    this.head.prev = null
                }
            }else if(position === this.size - 1){
                let current = this.tail;
                this.tail = current.prev
                this.tail.next = null                
            }else{
                let i = 0;
                while (i < position) {
                    prev = current
                    current = current.next
                    i++
                }
                prev.next = current.next
                current.next.prev = prev
            }
        }else{
            return null
        }
    }
}

const list = new DoublyLinkedList()
list.insertAt(0, 'A')
list.insertAt(1, 'B')
// node.insertAt(2, 'C')
// node.insertAt(3, 'D')
// node.removeAt(2)

console.log("head",list.head)
console.log("head next",list.head.next)
console.log("tail",list.tail)
