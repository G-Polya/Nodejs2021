#!/usr/bin/env node
const fs = require("fs")
const path = require("path")

const type = process.argv[2]
const name = process.argv[3]
const directory = process.argv[4] || ".";

const htmlTemplate = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>Template</title>
        </head>
        <body>
            <h1>Hello</h1>
            <p>CLI</p>
        </body>
    </html
`

const routerTemplate = `
    const express = require("express")
    const router = express.Router()

    router.get("/", (req,res,next)=>{
        try{
            res.send("ok")
        } catch(error){
            console.error(error)
            next(error)
        }

    })
`

const exist = (dir)=>{
    try{
        fs.accessSync(dir,fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK);
        return true;
    }catch(e){
        return false;
    }
}