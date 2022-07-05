const express = require('express');
const path = require('path');//to get path of html file
const app = express();

/**
 * Task 2 done, sending text with get request
 */
// app.get('/',(request, response)=>{
//     response.status(200).send("Hello Express");
//   })
  
/**
 * Task 3, serve html file, done
 */
app.get('/',(request, response)=>{
    console.log(path.join(__dirname));
    response.status(200).sendFile(path.join(__dirname,"/views/index.html"));
});

































 module.exports = app;
