// let x = ["hataf",2,"orange",true]
// console.log(x)

// Indexing to acess
// console.log(x[2])

//? Destructuring
// let [a , b] = [x[0], [...x]]
// console.log(a,b)

let fruit = ["apple","orange","mango"]
let newFruit = fruit



// Reference copy
// newFruit.push("a")
// console.log(fruit)
// console.log(newFruit)

//? using spread operator to clone array rather create a reference to an array 
let xfruits = [...fruit]
console.log(fruit)
console.log(xfruits)

xfruits.push("abc")
console.log(fruit)
console.log(xfruits)

