// const os = require("node:os");   // why we write require ? : this is also called common javascript import 
// const fs = require("node:fs");
// const { error } = require("node:console");
// const event = require("node:events");
// const http = require("node:http");

// const functions = require("./modul.js"); //module was not publish  

// // after publish the module
// // const functions = require("abhimanyunpm");


// const sum=functions.add(5,7);
// console.log(sum);

// const difference = functions.sub(7,2);
// console.log(difference);

// import os from "node:os"  // this is called ESM(esamscript) import

// console.log("this is my first application ")
// const a=10;
// const b=20;
// const c=a+b;
// console.log("c=",c);
// const arr=["akash","vijay","sanjay"];
// console.log(arr);
// console.log("hello node mon")
// console.log("five in one")

// console.log(os.cpus().length);
// console.log(os.freemem());
// console.clear();
// console.log(os.networkInterfaces());

// --------------------------- write oparation ------------------------------

// file system (fs )
//                         Create Operation
// 1. write file
// this is also a create operation
// syntax
/*
       fs.writeFile(" path " , " contant " , " function ");
*/

// fs.writeFile(
//   "textme.txt",
//   "this is the file created by fs node module if we change the any this in content it will overwrite their",
//   (error) => {
//     if (error) {
//       console.log(error);
//     }
//   }
// );

// ------------ update or edit operation ---------------
/*
      fs.appendFile("  path " , " updated content " , " function ");
*/
// fs.appendFile("textme.txt","\n this is the new updated paragraph",(error)=>{
//     if(error){
//         console.log(error);
//     }
// })

// const msg=new Date().toISOString()+"user login activity \n"
// fs.appendFile("textme.txt",msg,(error)=>{
//     if(error){
//         console.log(error);
//     }
// })

// const msg=new Date().toLocaleTimeString()+" user login activity \n"
// fs.appendFile("textme.txt",msg,(error)=>{
//     if(error){
//         console.log(error);
//     }
// })

// const msg=new Date().toLocaleString()+" user login activity \n"
// fs.appendFile("textme.txt",msg,(error)=>{
//     if(error){
//         console.log(error);
//     }
// })

//      by using function 
// const updatefile=()=>{
// const msg=new Date().toLocaleString()+" user login activity \n"
// fs.appendFile("textme.txt",msg,(error)=>{
//     if(error){
//         console.log(error);
//     }
// })
// }
// updatefile();

// ------------- Read operation ---------------------------

// const fileName="textme.txt";
// const readFile=()=>{
//     fs.readFile(fileName,(error, data)=>{
//         if(error){
//             console.log(error);
//         }
//         console.log("file Content : ",data);
//     });
// };
// readFile();
// fs.readFile => always give us  =>  " Buffer data "  to convert the buffer data we can use the "toString" method 


// const readFile=()=>{
//     fs.readFile(fileName,(error, data)=>{
//         if(error){
//             console.log(error);
//             return;
//         }
//         console.log("file Content : ",data.toString());
//     });
// };
// readFile();

// ----------------- Delete the file --------------------------
// unlink = this is used  for deleting the file

// const fileName="textme.txt";
// const DeleteFile=()=>{
//     fs.unlink(fileName,(error)=>{
//         if(error){
//         console.log(error);
//         return;
//         }
//         console.log("file" ,fileName,"successfully Deleted");
//     })
// };
// DeleteFile();

// fs.mkdir = is used for making the folder in the system
// same process
// fs.existsSync("folder or file name") = this will search for the folder or file 
// wherth this exits or not 

// ------------------- Events ----------------------------------

// const myEmitter = new event.EventEmitter();


// listen the events
// myEmitter.on("i_am_emminting",()=>{
//     console.log("i am looking this events");
// })

// // Emit the events
// myEmitter.emit("i_am_emminting");

// myEmitter.on("i_am_emminting",()=>{
//     console.log("i am looking this events");
// })

// let count=0;
// const signal =["green","blue","red"];
// // Emit the events
// setInterval(()=>{
//     const index=count %3
//     count++;
//     console.log("signal change",signal[index]);
//     myEmitter.emit("i_am_emminting");
// },2000);



// myEmitter.on("i_am_emminting",(event)=>{    // event is we write target on js
//     // console.log("i am looking this events", event);
//     const mgs=new Date().toLocaleString()+": signal changes to = "+ event + os.EOL;
//     // console.log(mgs);
//     fs.appendFile("textme.log", mgs ,((error)=>{
//         if(error){
//             console.log(error);
//             return;
//         }
//     }));
// })

// const signal =["green","blue","red"];
// let count=0;

// Emit the events
// setInterval(()=>{
//     const index=count %3
//     count++;
//     // console.log("signal change",signal[index]);
//     myEmitter.emit("i_am_emminting" , signal[index]);
// },2000)


// ---------------------------- http module -------------------------------------

// http.createServer(()=>{
//     console.log("successfully runing server")
// }).listen(8080);

// ----------------------------------------
// const server=(request,response)=>{
// console.log(request);
// response.write("this is my first server side website");
// response.end();      // server send response back  to the client
// }
// const onserver=()=>{
//     console.log("server is running");
// };

// http.createServer(server).listen(8080,onserver);   // it also accepts two parameters

// -----------------------------------------------------------
// const server=(request,response)=>{
// console.log(request.url);
// if(request.url==="/todos"){ 
//        // this is also called as api point or end point
//        if(request.method==="GET"){
//         response.write("all the todos list will appear here, coming from Get method");
//        }else if(request.method==="POST"){
//         response.write("this route is used to create the new post work todos");
//        }
// }else if(request.url==="/post"){    // this is also called as api point or end point
//     response.write("all the post list will appear here");
// }else{
//     response.write(`error 404 page is  ${request.url} is not found`);
// }   
// response.end();      // server send response back  to the client
// }
// const onserver=()=>{
//     console.log("server is running");
// };

// http.createServer(server).listen(8080,onserver);   // it also accepts two parameters

// -------------------------------------------------------------------------
/*

const todos=[
    {id:1, name:"Akash",   rollno:56 },
    {id:2, name:"Akash1",  rollno:52 },
    {id:3, name:"Akash2",  rollno:53 },
    {id:4, name:"Akash3",  rollno:50 },
    {id:5, name:"Akash4",  rollno:51 }
];

const server=(request,response)=>{
    console.log(request.url);
    if(request.url==="/todos"){ 
           // this is also called as api point or end point
           if(request.method==="GET"){
            response.write("all the todos list will appear here, coming from Get method");
            // response.end(todos);     if we write this it will throw an error 
            // arrays can not be display on its (so convert to json.stringify() )
            // like this
            response.end(JSON.stringify(todos));      

           }else if(request.method==="POST"){
            response.write("this route is used to create the new post work todos");
           }
    }else if(request.url==="/post"){    // this is also called as api point or end point
        response.write("all the post list will appear here");
    }else{
        response.write(`error 404 page is  ${request.url} is not found`);
    }   
    response.end();      // server send response back  to the client
    }
    const onserver=()=>{
        console.log("server is running");
    };
    
    http.createServer(server).listen(8080,onserver);


    */

// ------------------------------------------------------------------

// how can i send my module to any one ? 
// by using npm 
/*
 1.  go to the package json file
 change the name (name should have unique)
 and what we have to publice write the name on (main) what we to publice
 regiter in npm 
 npm login
 after that on terminal type npm publish
 done
*/


//   ----------------------- Express js ------------------------------------------

/*
const express = require('express');
const app = express()    // by writing this we use in node  (http.createServer)

app.get('/',(req,res)=>{
    res.send("this is the express server and running up");
})

app.get('/user',(req,res)=>{
    const user={
        name:"akash",
        rollno:52,
        student:52163
    };
    res.json(user);
});
app.get('/todos',(req,res)=>{
    const todo={
        name:"akash",
        rollno:52,
        student:52163,
        status :false,
        income:152586,
        work:"karaam chairii"
    };
    res.json(todo);
});

app.post('/list',(req,res)=>{
    const list={
        name:"akash",
        rollno:52,
        student:52163,
        status :false,
        income:152586,
        work:"karaam chairii",
        family:"helping hands"
    };
    res.json(list);
});
const port=8081;
app.listen(port,()=>{
    console.log("server is up and running on port",port);
});

*/

/*
const express = require('express');
const app = express() 
app.get('/',(req,res)=>{
    const user={
        name:"abhimanyu",
        sirname:"prajapati",
        student_id:52,
        rollno:52
    };
    res.json(user);
});
app.get('/user',(req,res)=>{
    const user={
        name:"abhimanyu",
        sirname:"prajapati",
        student_id:52,
        rollno:52,
        std:"5th",
    };
    res.json(user);
});
app.post('/user',(req,res)=>{
    const user={
        name:"abhimanyu",
        sirname:"prajapati",
        student_id:52,
        rollno:52,
        std:"5th",
    };
    res.json(user);
});
app.put('/user',(req,res)=>{
   const update={
    success: "true",
    send:"succesfully updated the method",
   }
    res.json(update); 
});
app.delete('/user',(req,res)=>{
    const deleteer={
     success: "true",
     send:"succesfully deleted the method",
    }
     res.json(deleteer); 
 });
const port=8081;
app.listen(port,()=>{
console.log("local host is running successful on",port);
})

*/



