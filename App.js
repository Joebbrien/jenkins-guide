'use strict';

const express = require('express');
const http = require('http');
const axios = require('axios');
const app = express();

// Server connection
const PORT = 9000;
const HOST = '0.0.0.0';

// Application content
const os = ['Windows','macOS','Linux']

// Web Server
app.get('/',function(req,res) {

  let name ="Joebbrian";
  let suname ="Bundabunda";
  let fullname = name + " "+ suname;  

  res.json(os);
});


app.get('/user',function(req,res){
   //pos

  const response={
     firstName: "Joebbrian",
     lastName: "Bundabunda",
     career: "Information Technology",
     credit: sum()
   }
   res.send(JSON.stringify(response));
});

app.get('/users', function(req, res){
  //return list of users

    const response=[
      {
        firstName: "Joebbrian",
        lastName: "Bundabunda",
        career: "Information Tectnology",
        credit: sum(78, 21)
      },
      {
        firstName: "Joebbrian",
        lastName: "Bundabunda",
        career: "Information Tectnology",
        credit: sum(30, 20)
      },
      {
        firstName: "Joebbrian",
        lastName: "Bundabunda",
        career: "Information Tectnology",
        credit: sum(89,90)
      },
    ]

    res.send(JSON.stringify(response));


});
 
app.get('/api/weather', function(req, res){
 
  axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0ef6e9fc0cf669678fb90d63969dcda6')
  .then(response => {
    console.log(response.data);
  
    const resp= response.data;
    res.send(resp);
  })
  .catch(error => {
    console.log(error);
  });

 
});



function sum(value1, value2){
  //do some math
  return value1 + value2;
}


// Console output
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);