class Set{
    constructor(){
        this.items = {}
    }

    has(value){
        return this.items.hasOwnProperty(value)
    }

    add(value){
        if(!this.has(value)){
            this.items[value] = value
            return true
        }else{
            return false
        }
    }

    delete(value){
        if(this.has(value)){
            delete this.items[value]
            return true
        }else{
            return false
        }
    }

    clear(){
        this.items = {}
    }

    size(){
        return Object.keys(this.items).length
    }

    values(){
        return Object.values(this.items)
    }

    union(otherSet){
        let unionSet = new Set();
        let values = this.values()
        for(let i = 0; i < values.length; i++){
            unionSet.add(values[i])
        }

        values = otherSet.values()
        for(let i = 0; i < values.length; i++){
            unionSet.add(values[i])
        }

        return unionSet
    }

    intersection(otherSet){
        let intersectionSet = new Set();
        let values = this.values()
        for(let i = 0; i < values.length; i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i])
            }
        }

        return intersectionSet;
    }

    difference(otherSet){
        let differenceSet = new Set();
        let values = this.values()
        for(let i = 0; i < values.length; i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i])
            }
        }

        return differenceSet;
    }

    subset(otherSet){
        if(this.size() > otherSet.size()){
            return false
        }else{
            let values = this.values();
            for(let i = 0; i < values.length; i++){
                if(!otherSet.has(values[i])){
                    return false
                }
            }
            return true
        }
    }

}

function intersection(setA, setB){
    let newSet = new Set()
    for(let x of setA.values()){
        if(setB.has(x)){
            newSet.add(x)
        }
    }
    return newSet
}

function difference(setA, setB){
    let newSet = new Set()
    for(let x of setA.values()){
        if(!setB.has(x)){
            newSet.add(x)
        }
    }
    return newSet
}

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(6);
let setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);
setB.add(4);

let intersectionAB = difference(setA, setB);
console.log("intersectionAB", intersectionAB)
// console.log(setA.subset(setB))
// console.log(setA.values())
// let unionAB = setA.union(setB);
// console.log(unionAB.values());

// let intersectionAB = setA.intersection(setB);
// console.log(intersectionAB.values());

// let differenceAB = setA.difference(setB);
// console.log(differenceAB.values());
