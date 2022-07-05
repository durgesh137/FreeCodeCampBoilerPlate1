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
    // console.log(path.join(__dirname));
    response.status(200).sendFile(path.join(__dirname,"/views/index.html"));
});

/**
 * Task 4, serving static data
 * using express.static as middleware.
 * => /public is path, which is optional
 * => if path not given, then it will execute for each request
 * 
 */
app.use('/public', express.static(path.join(__dirname,'/public')));

/**
 * Task 5 server json as response, DONE
 */
app.get('/json', (request, response) => {
    response.status(201).json({
        "message" : "Hello json"
    });
});




























 module.exports = app;
