var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var mongoose = require('mongoose');
var User = require('./user.js');
var bcrypt = require('bcrypt');

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended:true}));  // to support URL-encoded bodies
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/jewellry');

var chris = new User({username: 'chris', password: 'password'});

console.log("generating password " + chris.generateHash(this.password));

//Start the app
var port = 3000;

var onServerStart = function() {
  console.log("Listening on port " + port);
}

app.listen(port,onServerStart);
