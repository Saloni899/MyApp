const express = require("express");
const app=express();
const router = require("./routes/routing");
app.use("/",router);
console.log("server started at port 3000");
app.listen(3000);