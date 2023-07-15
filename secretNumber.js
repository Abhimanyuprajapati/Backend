const express = require('express');
const app = express() 
require('dotenv').config()   // i from npm dotenv its came

app.get('/Secretkey',(req,res)=>{
const secretnumber=process.env.SECRET_KEY;
    if(secretnumber){
        res.json({Number:secretnumber})
    }else
    {
        res.json("number is not found"); 
    }
});
const port=8081;
app.listen(port,()=>{
    console.log("api is running succesfully in",port);
});