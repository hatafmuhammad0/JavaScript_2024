function myFunc1() {
    console.log("Function is doing task 1")
}
function myFunc2() {
    console.log("Function is doing task 2")
}

function task(cb1, cb2) {
    setTimeout(() => {
        cb1()
        setTimeout(() => {
            cb2()
        }, 5000)
    }, 10000)
}

task(myFunc1, myFunc2)