function createUser(firstName, lastName, age) {
    let user = {}
        user.firstName = firstName,
        user.lastName = lastName,
        user.age = age,
        user.about = function () {
            return `${this.firstName} is ${this.age} year old`
        },
        user.is18 = function () {
            return this.age >= 18
        }
    
}

let user1 = createUser("Muhammad","hataf",32)
