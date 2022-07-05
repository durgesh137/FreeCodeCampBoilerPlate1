let express = require('express');
let app = express();


app.get('/',(request, response)=>{
    console.log('Hello World');
    response.status(200).send("Hello World");
  })
  

































 module.exports = app;
