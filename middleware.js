const express = require('express');
const app = express() 
/*
how to create this 
go to postman and select on the post 
pass the url 
click on the raw tab
create the dami data 
and send it
*/
// express.json();  // its converte the data to json coming from post api

// app.use()  // this is called middleware  (its act as a connect or intermideate)
app.use(express.json());

app.post('/middleware',(req,res)=>{
   console.log(req.body);
    const response={
        message:"learning the middleware",
    }
    res.json(response);
    });

const port=8081;
app.listen(port,()=>{
    console.log("api is running succesfully in",port);
});