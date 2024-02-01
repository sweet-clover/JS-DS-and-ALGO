function hashCode(key){
    let hash = 0
    for(let i = 0; i < key.length; i++){
        hash += key.charCodeAt(i)
    }
    return hash % 37
}

class HashTable{
    constructor(){
        this.table = []
    }

    put(key, value){
        let index = hashCode(key)
        this.table[index] = value
    }

    get(key){
        let index = hashCode(key)
        return this.table[index]
    }

    remove(key){
        let index = hashCode(key)
        delete this.table[index]
    }
}

let ht = new HashTable()
ht.put("Coverl", "A clover is a small plant.")
console.log("table", ht.get("Clover"))