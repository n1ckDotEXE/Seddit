const express = require('express');
const bodyParser = require('body-parser');
const app = express(); 
const views = require("ejs") 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine","ejs") 
app.set("views","views") 
app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Todo List API is now listening on port 3000...');
  }); 


  app.get("/",(req,res)=> { 
    res.render("index")
  })