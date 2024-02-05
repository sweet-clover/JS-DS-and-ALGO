// Utility Function
function loseloseHashCode(key){
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i)
    }
    return hash % 37
}

// Linked List Start
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getHead(){
        return this.head
    }

    prepend(element) {
        let node = new Node(element)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(element) {
        let node = new Node(element)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }

    insert(position, element) {
        if (position < 0 || position >= this.size) {
            return false
        }

        if (position === 0) {
            return this.prepend(element)
        } else {
            let node = new Node(element)
            let current = this.head;
            let prev = null
            let i = 0;
            while (i < position) {
                prev = current
                current = current.next
                i++
            }
            node.next = current
            prev.next = node
            this.size++
        }
    }

    index_of(element) {
        let current = this.head
        let i = 0
        while (current) {
            if (current.element === element) {
                return i
            }
            i++
            current = current.next
        }
        return -1
    }

    remove_at(position) {
        if(position < 0 || position >= this.size) {
            return false
        }
        let current = this.head
        if (position === 0) {
            this.head = current.next
        } else {
            let prev;
            let i = 0
            while (i < position) {
                prev = current
                current = current.next
                i++
            }
            prev.next = current.next
            this.size--
        }
    }

    remove(element) {
        let index = this.index_of(element)
        this.remove_at(index)
    }

    print() {
        let current = this.head
        let str = ''
        while (current) {
            str += current.element + ' '
            current = current.next
        }
        return str
    }
}
// Linked List End

class ValuePair{
    constructor(key, value){
        this.key = key
        this.value = value
    }

    toString(){
        return '['+this.key+'-'+this.value+']'
    }
}

class HashTable{
    constructor(){
        this.table = []
    }

    put(key, value){
        const position = loseloseHashCode(key)
        let pair = new ValuePair(key, value)
        if(this.table[position] === undefined){
            this.table[position] = new LinkedList()
        }
        this.table[position].append(pair)
    }

    get(key){
        const position = loseloseHashCode(key)
        if(this.table[position] !== undefined){
            let current = this.table[position].getHead() 
            // head ကိုယူလိုက်တာ ပြီးရင် next က null ဖြစ်တဲ့ အထိ loop ပတ်ပြီး
            // linked list ထဲက key က function parameter က key နဲ့ ညီရင်
            // ရပြီ

            while(current.next){
                if(current.element.key === key){
                    return current.element.value
                }
                current = current.next;
            }

            if(current.element.key === key){
                return current.element.value;
            }
        }

        return undefined
    }

    remove(key){
        const position = loseloseHashCode(key)
        if(this.table[position] !== undefined){
            let current = this.table[position].getHead()
            while(current.next){
                if(current.element.key === key){
                    this.table[position].remove(current.element)
                    if(this.table[position].isEmpty()){
                        this.table[position] = undefined
                    }
                    return true
                }
                current = current.next;
            }

            if(current.element.key === key){
                this.table[position].remove(current.element)
                if(this.table[position].isEmpty()){
                    this.table[position] = undefined
                }
                return true;
            }
        }

        return false
    }

    print(){
        for(let i = 0; i < this.table.length; i++){
            if (this.table[i] !== undefined) {
                console.log(i + ": " + this.table[i]);
            }
        }
    }
}

var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com')
hash.put('John', 'johnsnow@email.com')
hash.put('Tyrion', 'tyrion@email.com')
hash.put("Clover", "A clover is a small plant with bright green leaves")
hash.put("Coverl", "testing")

console.log(hash.get("Coverl"))
console.log(hash.get("Clover"))
console.log(hash.remove("Clover"))
console.log(hash.table)