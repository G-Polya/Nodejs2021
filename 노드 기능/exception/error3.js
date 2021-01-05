const fs = require("fs").promises

setInterval(()=>{
    fs.unlink('./abc.js')
    .catch((err)=>{
        console.log("에러")
    })
}, 1000)

setInterval(async ()=>{
    try{
        const data = await fs.unlink("./abc.js")

    }catch(err){
        console.log("에러2")
    }
}, 1000)