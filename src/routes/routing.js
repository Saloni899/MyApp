const express=require('express');
const routing=express.Router();
routing.get("/",(req,res,next)=>{
    //res.json({"message":"you are using express router in GET method"});
    console.log("Accessing Home page");
    next();
});

routing.get("/",(req,res)=>{
    res.send("message");
});
/*
routing.put("/",(req,res)=>{
    res.json({"message":"you are using express router in PUT method"});
});

routing.delete("/",(req,res)=>{
    res.json({"message":"you are using express router in DELETE method"});
});
*/
module.exports = routing;