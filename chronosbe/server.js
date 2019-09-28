//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const cors = require('cors');

// initializes express
const app = express();
app.use(cors());
//initializes body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//serves homepage
require('./routes/routes.js')(app);


//Connects to my mongodb and logs status.
MongoClient.connect('mongodb://kronos55:kronos55@ds127115.mlab.com:27115/chronosdb', { useNewUrlParser: true }, (err, client) =>{
  if(err) return console.log(err);
  db = client.db('chronosdb');
  app.listen(process.env.PORT||72, function(){
  console.log('Ignition, port 72');
  })
})