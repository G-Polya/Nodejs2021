const express = require("express")

const router = express.Router()

// GET / 라우터
router.get("/", (req,res,next)=>{
    //res.send("Hello, Express")
    next("route")
}, (req,res,next)=>{
    console.log("실행되지 않습니다")
    next()
}, (req,res,next)=>{
    console.log("실행되지 않습니다")
    next()
});

router.route("/abc")
.get((req,res)=>{
    res.send("GET /abc")
})
.post((req,res)=>{
    res.send("POST /abc")
})


router.get("/", (req,res)=>{
    console.log("실행됩니다")
    res.send("Hello Express")
})

module.exports = router;