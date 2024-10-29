//most used in react

const person = {
    firstName : "Muhammad",
    gender : "Male"
}

// function getDetails(obj){
//     console.log(obj.firstName)
//     console.log(obj.gender)
// }
function getDetails({firstName,gender}){
    console.log(firstName)
    console.log(gender)
}

getDetails(person)