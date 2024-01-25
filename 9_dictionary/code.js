let m = new Map();
for (let i = 0; i < 100; i++) {
    let key = new Date().valueOf()
    m.set(key, i);
}

console.log("m", m)

let obj = {};
for (let i = 0; i < 100; i++) {
    let key = new Date().valueOf()
    obj[key] = i
}

console.log("obj", obj)

