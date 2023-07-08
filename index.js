const os = require("node:os");
const fs = require("node:fs");
const { error } = require("node:console");
const event = require("node:events");
const http = require("node:http");

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


// --------------
const server=(request,response)=>{
// console.log(request);
response.write("this is my first server side website");
response.end();
}
const onserver=()=>{
    console.log("server is running");
};

http.createServer(server).listen(8080,onserver);   // it also accepts two parameters
