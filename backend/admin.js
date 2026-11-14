var express = require('express')
const { MongoClient } = require('mongodb')

var router = express.Router()

router.get('/dashboard',async(req,res)=>{
    res.json({"Message":"Admin Dashboard"})
})

router.post('adduser',async(req,res)=>{
    var input = await Collection.InsertOne('users')
})

module.exports = router 