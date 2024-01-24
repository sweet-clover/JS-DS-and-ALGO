class Stack{
    constructor(){
        this.items = []
    }

    push(name){
        this.items.push(name)
    }

    pop(){
        return this.items.pop()
    }

    size(){
        return this.items.length
    }

    peek(){
        return this.items[this.size()-1]
    }

    is_empty(){
        return this.size() === 0
    }

    clear(){
        this.items = []
    }
}


function divideBy2(num){
    let stack = new Stack()
    let str = ''
    while(num > 0){
        const remainder = Math.floor(num % 2)
        stack.push(remainder)
        num = Math.floor(num / 2)
    }

    while(stack.size()){
        str += stack.pop()
    }
    return str
}
console.log(divideBy2(233)); // 11101001
