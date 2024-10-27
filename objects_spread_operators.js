// const user = {
//     name : "Muhammad",
//     age : 32,
//     profession : ["programmer","accountant"]
// }

// let user1 = {user}

// // console.log(user1)

// user1.email = "gmail.com"
// console.log(user)
// console.log(user1)

const obj1 = {
    key1 : "value1",
    key2 : "value2"
}
const obj2 = {
    key1 : "uniquevalue",
    key3 : "value3",
    key4 : "value4"
}

const newObj = {...obj1,...obj2}
console.log(newObj)