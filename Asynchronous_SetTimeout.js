function greet(){
    console.log("Good Morning ")
}
function GN(){
    console.log("Good Night ")
}

console.log("Script Start")
setTimeout(()=>{
    greet()
},5000)
console.log("Script in Mid")
setTimeout(()=>{
    GN()
},10000)
console.log("Script End")