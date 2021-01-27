const express = require("express");
const User = require("../schemas/user");

const router = express.Router();

router.get("/", async(req,res,next)=>{
    User.find({})
    .then((users)=>{
        res.render("mongoose", {users})
    })
    .cathc((err)=>{
        console.error(err);
        next(err);
    })
        
})

module.exports = router;