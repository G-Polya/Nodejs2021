const path = require("path")
const string = __filename
console.log("path.sep: ",path.sep)
console.log("path.delimiter: ",path.delimiter)
console.log("-------------------------------")
console.log("path.dirname(): ", path.dirname(string))
console.log("path.extname(): ", path.extname(string))
console.log("path.basename(): ", path.basename(string))
console.log("path.basename - extname: ", path.basename(string, path.extname(string)))
console.log("-------------------------------")
console.log("path.parse(): ", path.parse(string))
console.log("path.format(): ", path.format({
    dir:"C:\\user\\wlska",
    name:"path",
    ext:".js"
}))

console.log("path.normalize(): ", path.normalize("C://user\\\\wlska\\\path.js"))
console.log("-------------------------------")
console.log("path.isAbsoulte(C:\\): ", path.isAbsolute("C:\\"))
console.log("path.isAbsoulte(./home): ", path.isAbsolute("./home"))
console.log("-------------------------------")
console.log("path.relateve(): ", path.relative("C:\\users\\wlska\\path.js", "C:\\"))
console.log("paht.join(): ", path.join(__dirname,"..","..","/users",".","wlska"))
console.log("path.resolve(): ", path.resolve(__dirname,"..","users",".","/wlska"))