let user = {
    name: "muhammad",
    age: 32,
    "hobby detail" : "cricket"
}

// console.log(user.name)
// console.log(user["hobby detail"])  //~ Due to space issue we need to acess this key using bracket

// ! Undefine using dot notation 
// for (i in user) {
//     console.log(`key ${i} and value ${user.i}`)
// }

// ! getting value using bracket notation 
for (i in user) {
    console.log(`key ${i} and value ${user[i]}`)
}

// ! Adding Key value pair in user using const
const key = "email"

// user.email = "hataf@gmail.com"
// console.log(user)

// user[key] = "hataf@gmail.com"
// console.log(user)