/*
There is no database used in this project. 
You have been provided with a JSON file that contains the array of products. 
The file is named 'products.json', present in ./src/data/. 
Each object in the array contains an id, name, price, and quantity property.

Folder Structure:
The project has the following folder structure:
data/products.json : Has an array of json objects, used as a mock data dump file.
app.js : Contains the route which needs to be implemented.
Response for Different Scenarios:
When a product is found: Returns the product object with a status code of 200. 
Response: {"id": 1, "name": "Product Name", "price": 2000, "quantity": 50}
When no product is found: Returns a JSON response with a status code of 404 and a message "Product not found". 
Response: {"message": "Product not found"}

Routes and Request Parameters:

The API has one GET route with the following path: /products/:id
The route takes one parameter:
id: A number representing the id of the product to search for.
You can access the parameters in the route handler function using the request object. The 'id' parameter can be accessed using req.params.id.
Third-Party Library:
There is no third-party library used in this project.
File to Edit:
You need to edit the ./src/app.js file to implement the API. The products.json file contains the array of products that you can use to search for products.
Sample Inputs/Outputs: 

Case 1: Valid product id
Input: GET /api/v1/products/1

Output: 

{    
    "status": "success",
    "message": "Product fetched successfully",
    "data": {
        "product": {
            "id": 1,
            "name": "Nirma",
            "price": 2000,
            "quantity": 50
          }
     }
*/

const express = require('express');
const app = express() 

const products=[
    {  id: 1, name:"Product Name", price: 2000 , quantity: 50, },
    {  id: 2, name:"Product Name", price: 2000 , quantity: 50, },
    {  id: 3, name:"Product Name", price: 2000 , quantity: 50, },
    {  id: 4, name:"Product Name", price: 2000 , quantity: 50, },
    {  id: 5, name:"Product Name", price: 2000 , quantity: 50, },
    {  id: 6, name:"Product Name", price: 2000 , quantity: 50, },

];
app.get('/product/:productId',(req,res)=>{
   const productId=req.params.productId;
   console.log(productId);

   const producter=products.find((item)=>item.id==productId );
   
    if(producter){ 
        res.json(producter);
    } else{
        res.status(404).json({"message": "Product not found"});
    }
});

const port=8081;
app.listen(port,()=>{
    console.log("server is running",port);
})
