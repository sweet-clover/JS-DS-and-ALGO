class Stack{
    // constructor နဲ့ initial value သတ်မှတ်ထားတယ်
    constructor(){
        this.items = []
    }

    // array ထဲကို original method push သုံးပြီးထည့်လိုက်တယ်
    push(name){
        this.items.push(name)
    }

    // array ထဲက original method pop သုံးပြီး remove လုပ်လိုက်တယ်
    pop(){
        this.items.pop()
    }

    // array length ကို သုံးပြီး ဘယ်နှစ်ခုရှိလဲဆိုတာတွက်ထားတာ 
    size(){
        return this.items.length
    }

    // အပေါ်ဆုံးက value ကို လိုချင်လို့ အဲ့ value က နောက်ဆုံးမှာ ရောက်နေလို့
    // နောက်ဆုံး value ကို ပြန်ရှာထားတား
    peek(){
        return this.items[this.size()-1]
    }

    // array length zero ဖြစ်လားစစ်တာ size method ရေးပြီးသား 
    // ဖြစ်နေလို့ ပြန်ခေါ်သုံးတာ
    is_empty(){
        return this.size() === 0
    }

    // အကုန်ရှင်းလိုက်တာ
    clear(){
        this.items = []
    }
}

let stack = new Stack()
console.log(stack.is_empty()) // true တစ်ခုမှမထည့်ရသေးလို့

stack.push("HTML")
stack.push("CSS")
stack.push("JS")
stack.push("NODEJS")

console.log(stack.size()) //4

stack.pop() // တစ်ခုဖျက်လိုက်မယ် NODEJS ပျက်သွားမယ်

console.log(stack.peek()) // JS ထွက်လာမယ်
console.log(stack.is_empty()) // false (3ခုရှိနေလို့)
