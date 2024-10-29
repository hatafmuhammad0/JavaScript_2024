// function greet(cb){
//     console.log(`Good Morning ! ${cb}`)
// }

// function user(userName){
//     return userName
// }

// greet(user("Muhammad Hataf"))

function greet(user){
    function greet(){
        return `Good Morning ! ${user}`
    }

    return greet()
}

const x = greet("Muhammad Hataf")
console.log(x)