class Queue {
    constructor() {
        this.items = []
    }

    enqueue(item, priority) {
        // let element = 
        let element = { item, priority }
        // {item: item, priority: priority} ( key နဲ့ value က တူခဲ့ရင် 
        // {item, priority}) ဆိုပြီးရေးလို့ရတယ်

        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            //ဘယ်နေရာထည့်ရမလဲဆိုတာ ရှာရမှာမိုလို့ loop ပတ်ထားတာ

            if (element.priority < this.items[i].priority) {
                // နှစ်ခုတိုက်စစ် ငယ်ခဲ့ရင် တွေ့တဲ့ index နေရာ အသစ်ထပ်ထည့်တာ

                this.items.splice(i, 0, element);
                added = true;
                // ထည့်ပြီးသွားလား စစ်လိုက်တာ တကယ်လို့ priority က ကြီးတာမျိုး 
                // မပါခဲ့တာမျိုးဆိုရင် နောက်ဆုံးက ထပ်ထည့်ရမယ် 

                break;
                // ထည့်ပြီးရင် ဆက်မသွားတော့ ဘူး loop က ထွက်လိုက်တာ
            }
        }

        if (!added) {
            //  array ထဲမှာ မကိုက်လို့ နောက်ဆုံးက ထပ်ထည့်တာ
            this.items.push(element);
        }
    }

    print() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
}

const queue = new Queue()

queue.enqueue("David", 1)
queue.enqueue("Rose", 2)
queue.enqueue("Tom", 3)
queue.enqueue("Grandfather", 0)
queue.enqueue("Pregnant woman", 0)
queue.enqueue("Lily")
queue.print()

// { item: 'Grandfather', priority: 0 }
// { item: 'Pregnant woman', priority: 0 }
// { item: 'David', priority: 1 }
// { item: 'Rose', priority: 2 }
// { item: 'Tom', priority: 3 }
// { item: 'Lily', priority: undefined }