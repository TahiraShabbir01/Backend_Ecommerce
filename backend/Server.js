require('dotenv').config()
var express = require('express')
var server = express()
var jwt = require('jsonwebtoken')
var multer = require('multer')

var cors = require('cors')
var adminapis = require('./admin/admin')


server.use(express.json())
server.use(cors())
server.use('/admin',adminapis)


server.listen(process.env.PORT,()=>{
    console.log("Server is running")
})