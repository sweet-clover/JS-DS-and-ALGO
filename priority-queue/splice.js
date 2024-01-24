let arr = [
    { item: 'David', priority: 1 },
    { item: 'Rose', priority: 2 },
    { item: 'Tom', priority: 3 }
]

// ကျနော်တို့က အဘိုးတစ်ယောက်ကို အစမှာ ထပ်ထည့်မယ်

arr.splice(0,0,{ item: 'Grandfather', priority: 0 })
// console.log(arr)
// [
//     { item: 'Grandfather', priority: 0 },
//     { item: 'David', priority: 1 },
//     { item: 'Rose', priority: 2 },
//     { item: 'Tom', priority: 3 }
// ]

// delete count က 1 ဆိုရင် David နေရာ သူဝင်သွားမှာ
// arr.splice(0, 1, { item: 'Grandfather', priority: 0 })
// console.log(arr)
// [
//     { item: 'Grandfather', priority: 0 },
//     { item: 'Rose', priority: 2 },
//     { item: 'Tom', priority: 3 }
// ]

arr.splice(1,0,{ item: 'Pregnant woman', priority: 0 })
console.log(arr)
// [
//     { item: 'Grandfather', priority: 0 },
//     { item: 'Pregnant woman', priority: 0 },
//     { item: 'David', priority: 1 },
//     { item: 'Rose', priority: 2 },
//     { item: 'Tom', priority: 3 }
// ]
