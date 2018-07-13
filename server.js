var express = require( "express");
var path = require( "path");
var app = express();
var bodyParser = require('body-parser');
//set nodemailer



var server=require('http').Server(app);
server.listen(8001, function() {
 console.log("listening on port 8001");
})