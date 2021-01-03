const fs = require("fs").promises

console.log("시작")

const readMe2 = async function(string){
    try{
        let data = await fs.readFile("./readme2.txt")
        console.log(string,data.toString())
    }catch(err){
        console.error(err)
    }
}
readMe2("1번")
readMe2("2번")
readMe2("3번")

// (async ()=>{
//     try{
//         let data = await fs.readFile("./readme2.txt")
//         console.log("1번", data.toString())
//     } catch(err){
//         console.error(err)
//     }
   
// })()