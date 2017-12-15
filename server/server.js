'use strict';
// ----- initialization
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended:false});
var mongoose = require('mongoose');
var morgan = require('morgan');
var router = express.Router(); // Invoke the Express Router
var appRoutes = require('./app/routes/api')(router); // Import the application end points/API
var path = require('path');

mongoose.connect('mongodb://127.0.0.1:27017/inia', function(err) {
    if (err) {
        console.log('Not connected to database: ' + err);
    }
    else {
        console.log('Successfully connected to MongoDB')
    }
});

app.use(express.static('public'));
app.use(appRoutes);
app.use(morgan('dev')); // log every request to the console
app.use(express.static('/home/sabari/POC/UI/public'));

//Server
var server = app.listen(3001, function () {
  var port = server.address().port
  console.log('Example app listening on port 3000! go to http://localhost:%s',  port)
});
