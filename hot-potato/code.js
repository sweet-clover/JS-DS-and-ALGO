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

    size(){
        return this.items.length
    }
}

function hotPotato(names, num){
    let queue = new Queue()
    let selected = ''

    //queue ထဲကို names တွေထည့်လိုက်တာ
    for(let i = 0; i < names.length; i++){
        queue.enqueue(names[i])
    }

    // size က 1 ဖြစ်တဲ့ထိ loop ပတ်နေမှာ
    while(queue.size() > 1){

        // count ပြည့်ထဲအထိ နေရာပြောင်းပေးတာ
        for(let i = 0; i < num; i++){
            queue.enqueue(queue.dequeue())
        }

        // count ပြည့်သွားလို့ ရှေ့ဆုံးလူကိုထုတ်လိုက်တာ
        selected = queue.dequeue()
        console.log(selected + ' was eliminated from the Hot Potato game.');
    }
    //နောက်ဆုံးတစ်ယောက်ကို ထုတ်လိုက်တာ (winner)
    return queue.dequeue()
}

let names = ["A", "B", "C", "D", "E"];
console.log(hotPotato(names, 7)) //A