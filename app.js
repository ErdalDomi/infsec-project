var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
var Client = require('pg').Client;
var connection = require('pg').Connection;

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended:true}));  // to support URL-encoded bodies

app.use(express.static(path.join(__dirname, 'public')))

//Start the app
var port = 3000;

var onServerStart = function() {
  console.log("Listening on port " + port);
}

app.listen(port,onServerStart);

//-----------------db connection stub ------------------//
console.log("Connecting to the db...");
var username = 'postgres'; //request.body.username;
var password = 'password'; //request.body.password;
var dbname = 'infsec'; //request.body.dbname;
client = new Client({
    user: username,
    password: password,
    database: dbname,
    host: '127.0.0.1',
    port: 5432
  });
connection = client.connect(function(err){
  if(err){
    console.log("error connecting ", err);
  }
});
console.log('Connected to '+dbname + ' as user ' +username);
