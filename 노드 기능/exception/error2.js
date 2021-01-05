const fs = require("fs")

setInterval(()=>{
    fs.unlink('./abcdedefg.js', (err)=>{
        if(err){
            console.error(err)
        }
    })
}, 1000)