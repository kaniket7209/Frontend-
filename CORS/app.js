//intall express -> npm i express
const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("RESPONSE FOR GET REQUEST");
})
// "/" -> home directory
app.post("/",(req,res)=>{
    res.set("Access-Control-Allow-Origin","*");
    res.sendFile(__dirname+"CORS/data.json");
})
//verification 
app.options("/",(req,res)=>{
    res.set("Access-Control-Allow-Origin","*");
    res.set("Access-Control-Allow-Headers","Content-Type");
    res.send("Okay");
})
app.listen(3000,()=>{
    console.log("Listening to Port : 3000");
})