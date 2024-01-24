// let todo_list = []
// for(let i = 1; i <= 10000000; i++){
//     todo_list.push({
//         id: i,
//         task: `Task ${i}`,
//         done: false
//     })
// }

// let start = Date.now() // စတဲ့အချိန်
// todo_list.push({ id: 101, task: 'Task 101', done: false })
// let end = Date.now() // ဆုံးတဲ့အချိန်

// console.log("todo_list length", todo_list.length)
// console.log("time", end - start)


let todo_list = []
for(let i = 1; i <= 10000000; i++){
    todo_list.push({
        id: i,
        task: `Task ${i}`,
        done: false
    })
}

let start = Date.now() // စတဲ့အချိန်
todo_list.unshift({ id: 101, task: 'Task 101', done: false })
let end = Date.now() // ဆုံးတဲ့အချိန်

console.log("todo_list length", todo_list.length)
console.log("time", end - start)