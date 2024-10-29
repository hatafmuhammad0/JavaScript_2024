// function hello(a,...args){
//     console.log(args)
// }

// hello("slim","book","limk","open")



function sumAll(...args){
    let sum = 0;
    for (let i in args){
        sum = sum + args[i]
    }
    return sum
}

const ans = sumAll(2,3,4,5)
console.log(ans)