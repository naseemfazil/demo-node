const e = require('cors');
const express=require('express');
const router=express.Router();

router.post('/user1',function(req,res){
    if(res){
     console.log("hello");   
    }
    else{
        console.log("not working");
    }
})





module.exports=router;