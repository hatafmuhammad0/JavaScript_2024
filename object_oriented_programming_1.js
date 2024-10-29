const user1 = {
    firstName : "Hataf",
    age : 32,
    about : function(hobby,music){
        console.log(this.firstName, this.age , hobby ,music)
    }
}
const user2 = {
    firstName : "zain",
    age : 22,
}
const user3 = {
    firstName : "Ali",
    age : 25,
}
const user4 = {
    firstName : "shab",
    age : 26,
}

// ~ call function call a method from object define in other variable 
user1.about.call(user2,"Cricket","king")

// ~ Apply

user1.about.apply(user3,["singing","link"])

// ~ bind return a function

let x = about.bind(user1,"user4","link4")
