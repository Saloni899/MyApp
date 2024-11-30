const express = require('express');
const app=express();

const path=require('path');

app.get('/',(req,res)=>{
    console.log("request for an index.html page");
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/home',(req,res)=>{
    res.set('Content-Type','text/plain');
    res.send('Welcome');
});

app.get('/register',(req,res)=>{
    console.log('request for register.html file');
    res.sendFile(path.join(__dirname+"/views/register.html"));
});

app.get('/about',(req,res)=>{
    console.log('requesr for about us page');
    res.send("About us page");
});

app.get("/saveUser", (req, res) => {
    const { username, password } = req.query; // Extract query parameters
    if (!username || !password) {
        res.status(400).json({ error: "Username and password are required" });
    } else {
        console.log(`User Registered: ${username}`);
        res.json({ message: "User registered successfully", username });
    }
});

app.get("/user/:username/:id",(req,res)=>{
    res.send("<h1>Hello,"+req.params.username+req.params.id+"</h1>"        
    );
});

//localhost:3000/user1/firstName=john&lastName="smith"
app.get('/user1',(req,res)=>{
    console.log(req.query.firstName);
    console.log(req.query.lastName);
    res.json({"message":`the data coming from GET url is ${req.query.firstName}${req.query.lastName}`});
});

console.log("Server started on port 3000");
app.listen(3000);
