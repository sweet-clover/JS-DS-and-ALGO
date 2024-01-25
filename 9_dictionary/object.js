// INSERT (Object)
let obj = {}
let startTime = Date.now()
let endTime;
for (let i = 0; i < 100000; i++) {
    let key = Math.floor(new Date().valueOf() * Math.random())
    obj[key] = i
}
endTime = Date.now()
console.log("insert (time)", endTime - startTime) //271

// SIZE (Object)
startTime = Date.now()
console.log("size ", Object.keys(obj).length ) //100000
endTime = Date.now()
console.log("get size (time)", endTime - startTime) //50

