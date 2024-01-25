// INSERT (Map)
const arr = new Array(100000).fill(0).map(() => Math.random())
let m = new Map();
let startTime = Date.now()
let endTime;
for (let i = 0; i < 100000; i++) {
    let key = Math.floor(new Date().valueOf() * Math.random())
    m.set(key, i);
}
endTime = Date.now()
console.log("insert (time) ", endTime - startTime) //116

// SIZE (Map)
startTime = Date.now()
console.log("size ", m.size ) //100000
endTime = Date.now()
console.log("get size (time) ", endTime - startTime) //1