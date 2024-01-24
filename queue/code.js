class Queue{
    constructor(){
        this.items = []
    }

    enqueue(item){
        this.items.push(item)
    }

    dequeue(){
        return this.items.shift()
    }

    is_empty(){
        return this.items.length === 0
    }

    peek(){
        // ပထမဆုံးတစ်ခုပဲ ထုတ်ပေးရုံပဲ index 0 ထုတ်လိုက်တာ
        // empty array ဖြစ်နေမှာစိုးလို့ validation ထပ်စစ်မယ်
        return this.is_empty() ? null : this.items[0]
    }

    size(){
        return this.items.length
    }
}

const queue = new Queue()
console.log(queue.is_empty()) // true တစ်ခုမှမထည့်ရသေးလို့

queue.enqueue("HTML")
queue.enqueue("CSS")
queue.enqueue("JS")
queue.enqueue("NODEJS")

queue.dequeue() // တစ်ခုဖျက်လိုက်မယ် HTML ပျက်သွားမယ်
console.log(queue.peek()) // CSS ထွက်လာမယ်
console.log(queue.is_empty()) // false (3ခုရှိနေလို့)
console.log(queue.size()) // 3

