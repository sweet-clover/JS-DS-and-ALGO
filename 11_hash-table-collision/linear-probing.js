

function hashCode(key){
    let hash = 0
    for(let i = 0; i < key.length; i++){
        hash += key.charCodeAt(i)
    }
    return hash % 37
}

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
        let position = hashCode(key)
        let pair  = new ValuePair(key, value)
        if(this.table[position] === undefined){
            this.table[position] = pair
        }else{
            let index = ++position
            while(this.table[index] != undefined){
                index++;
            }
            this.table[index] = pair
        }
    }

    get(key){
        let position = hashCode(key)
        if(this.table[position] !== undefined){
            if(this.table[position].key === key){
                return this.table[position].value
            }else{
                let index = ++position
                while(this.table[index] === undefined || this.table[index].key != key){
                    index++
                }
                if(this.table[index].key === key){
                    return this.table[index].value
                }
            }
        }
        return undefined
    }

    remove(key){
        let position = hashCode(key)
        if(this.table[position] !== undefined){
            if(this.table[position].key === key){
                this.table[position] = undefined
            }else{
                let index = ++position
                while(this.table[index] === undefined || this.table[index].key != key){
                    index++
                }
                if(this.table[index].key === key){
                    this.table[index] = undefined
                }
            }
        }
        return undefined
    }
}

let ht = new HashTable()
ht.put("Clover", "A clover is a small plant.")
ht.put("Coverl", "testing")
console.log("table", ht.table)
console.log("table", ht.remove("Coverl"))
console.log("table", ht.table)
