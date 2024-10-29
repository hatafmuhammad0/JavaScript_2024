function createUser(firstName, lastName, age) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age

}

createUser.prototype.about = function() {
    return `${this.firstName} is ${this.age} year old`
}
createUser.prototype.is18 = function() {
    return this.age >= 18
}

let user1 = new createUser("Muhammad","Hataf",32) 
console.log(user1.about())