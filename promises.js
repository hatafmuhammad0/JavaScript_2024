let bucket = ["chips","coffe","chicken","grapes","rice","salt"]


let friedRice = new Promise((resolve,reject)=>{
    if(bucket.includes("rice") & bucket.includes("salt")){
        resolve("Fried Rice is in process")
    }else{
        reject("Error: Ingridents not available")
    }
    
    
})

console.log(friedRice)

