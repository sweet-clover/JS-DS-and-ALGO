class Queue{
    constructor(){
        this.items = []
        this.front = 0;
        this.rear = 0;
    }

    enqueue(item){
        // push မသုံးတော့ဘူး နောက်ဆုံး index ကိုမှတ်ထားပြီးသားဆိုတော့
        // အဲ့ index ကို သုံးလိုက်တယ်
        this.items[this.rear] = item
        this.rear++
    }

    dequeue(){
        // ရှေ့ဆုံး index ကိုမှတ်ထားတာရှိလို့ အဲ့တာကိုသုံးထားတယ်
        // array က delete လုပ်လိုက်လည်း [ <1 empty item>, 'CSS', 'JS', 'NODEJS' ]
        // နေရာက ရှိနေဆဲမိုလို့ front ကို 1 တိုးပြီး 
        // လက်ရှိ နေရာကို ပြန်မှတ်ထားတယ်
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    is_empty(){
        // rear - front က zero ဖြစ်ရင် empty
        return this.rear - this.front === 0
    }

    peek(){
        // ရှေ့ဆုံး index ကို မှတ်ထားပြီးသားဖြစ်နေလို့
        // this.front ကိ သုံးရမယ်
        // empty array ဖြစ်နေမှာစိုးလို့ validation ထပ်စစ်မယ်
        return this.is_empty() ? null : this.items[this.front]
    }

    size(){
        // [ <1 empty item>, 'CSS', 'JS', 'NODEJS' ]
        // empty ပါနေတော့ array length က မှန်မှာမဟုတ်ဘူး
        // fornt - rear ဆိုရင် length ရပြီ
        return this.rear - this.front
    }
}

const queue = new Queue()
console.log(queue.is_empty()) // 0-0 === 0 တစ်ခုမှမထည့်ရသေးလို့

queue.enqueue("HTML")
queue.enqueue("CSS")
queue.enqueue("JS")
queue.enqueue("NODEJS")
queue.dequeue() // တစ်ခုဖျက်လိုက်မယ် HTML ပျက်သွားမယ်

console.log('queue', queue.items)

console.log(queue.peek()) // CSS ထွက်လာမယ်
console.log(queue.is_empty()) // 4-1 != 0 (3ခုရှိနေလို့)
console.log(queue.size()) // 3

