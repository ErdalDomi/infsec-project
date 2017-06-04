var express = require('express')
var app = express()

var path = require('path')
var bodyParser = require('body-parser')
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var bcrypt = require('bcrypt');

//tls
// var fs = require('fs');
// var https = require('https');
// var options = {
//    key  : fs.readFileSync('server.key'),
//    cert : fs.readFileSync('server.crt')
// };

var psql = require('pg');
var Client = require('pg').Client;
// var psqlConnection = require('pg').Connection;

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended:true}));  // to support URL-encoded bodies
app.use(express.static(path.join(__dirname, 'public')));
//////////////////////////////////////////////////////////////////////////////

var client; //we use this to query the database

client = new Client({
  user: 'postgres',
  password: 'password',
  database: 'infsec',
  host: '127.0.0.1',
  port: 5432
});
client.connect();
client.on('error', function(error){
  console.log('error connecting to the db: ' + error);
});

console.log('Database connection established');

/////-----------------------

app.post('/signup', function(req,res){
  //stub here securely get user credentials
  var email = req.body.email;
  var password = req.body.password;

  var query = client.query("select * from users where email = '"+email+"';"); //do prepared statements here
  query.on('error', function(error){
    console.log("there was an error cheking existing users. " + error);
  });
  query.on('end', function(result){
    if(result.rows[0]){
      res.send('no');
    }else{
      var hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
      var query = client.query("insert into users(email, password) values ('"+email+"' , '"+hashedPassword+"');"); //do prepared statements here
      query.on('error', function(error){
        console.log("there was an error creating user. " + error);
      });
      res.send('ok');
    }
  });

});

app.post('/login', function(req,res){
  //stub here securely get user credentials
  var email = req.body.email;
  var password = req.body.password;

  console.log("the server got these credentials: " + email + " and " + password);

  var query = client.query("select * from users where email = '"+email+"';"); //do prepared statements here
  query.on('error', function(error){
    console.log("there was an error retreiving user. " + error);
  });
  query.on('end', function(result){
    if(result.rows[0]){
      var check = bcrypt.compareSync(password, result.rows[0].password);
      if(check){
        res.send('ok');
      }else{
        res.send('no');
      }
    }
    else{
      res.send('no');
    }
  });


});



//Start the app
var port = 3000;

var onServerStart = function() {
  console.log("Listening on port " + port);
}

app.listen(port,onServerStart);
