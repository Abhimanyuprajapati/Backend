/*
Introduction:
This project requires retrieving the productID with route parameters.
With route parameters, you can easily retrieve specific product information by providing the corresponding product ID in the route.
we can use the req.params object to extract the productId from the route parameters.

The folder structure of the project should consist of 1 main folder: "src".

"src":  contains the "index.js" and "app.js" files, where "index.js" handles the database connection and app.js handles the actual logic for a route.

NOTE: You only have to edit app.js

WHAT YOU HAVE TO DO?

1./product/:productId:  Retrieves product information based on the product ID.

productId (required): The ID of the product to retrieve information for.

Method: GET

Endpoint: /product/:productId

productId (required): The ID of the product to retrieve information for the specified product

Example Endpoint in this case of output: /user/42

Success Response Status: 200

Expected Output

{

  "productId": "42"

}

NOTE: You have to print productId, in this case 42 in the output with the help of req.params
*/

// here is the code

const express = require('express');
const app = express() 

// this is dynamic route
app.get('/user/:userId',(req,res)=>{
    console.log(req.params.userId);
    const user={
        userId:req.params.userId,
    };
    res.json(user);
});

const port=8081;
app.listen(port,()=>{
    console.log("server is running",port);
})

