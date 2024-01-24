class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    is_empty(){
        return this.size === 0
    }

    append(value){
        let node = new Node(value)
        if(this.is_empty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node // next ထဲကို node ထည့်လိုက်တာ
                                  // ref ဖြစ်လို့ head မှာပါပြောင်းသွားတယ်
            this.tail = node // tail ကို current node assign ပြန်လုပ်လိုက်တာ
        }
        this.size++
    }
}

let list = new LinkedList()
list.append("A")
list.append("B")
list.append("C")

console.log(list.head)
console.log(list.tail)

