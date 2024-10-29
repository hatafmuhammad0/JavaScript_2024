const userMethods = {

    about() {
        return `${this.firstName} is ${this.age} year old`
    },

    is18() {
        return this.age >= 18
    }
}


function createUser(firstName, lastName, age) {
    let user = {}
    user.firstName = firstName,
        user.lastName = lastName,
        user.age = age
        user.is18 = userMethods.is18
        user.about = userMethods.about
    return user
}

let user1 = createUser("Ali", "Muhammad", 23)

console.log(user1.about())

