const condtion = true

const promise = new Promise((resolve, reject)=>{
    if(condtion){
        resolve("성공")
    } else {
        reject("실패")
    }
})

promise
.then((message)=>{
    console.log("message1: ", message)
    return new Promise((resolve, reject)=>{
        resolve(message)
    })
})
.then((message2)=>{
    console.log("message2: ", message2)
    return new Promise((resolve, reject)=>{
        resolve(message2)
    })
})
.then((message3)=>{
    console.log("message3: ",message3)
})
.catch((error)=>{
    console.error(error)
})

