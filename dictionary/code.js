class Dictionary{
    constructor(){
        this.items = {}
    }

    set(key, value){
        this.items[key] = value
    }

    delete(key){
        delete this.items[key]
    }

    has(key){
        return this.items[key] ? true : false
    }

    get(key){
        return this.items[key]
    }

    clear(){
        this.items = {}
    }

    size(){
        return this.items.length
    }

    keys(){
        return Object(this.items).keys()
    }

    values(){
        return Object(this.items).values()
    }
}

