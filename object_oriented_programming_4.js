const userMethods = {

    about() {
        return `${this.firstName} is ${this.age} year old`
    },

    is18() {
        return this.age >= 18
    }
}


function createUser(firstName, lastName, age) {
    //~ Creating an object 
    let user = Object.create(userMethods)

    user.firstName = firstName,
        user.lastName = lastName,
        user.age = age
    return user
}

let user1 = createUser("Muhammad","Hataf",23)

