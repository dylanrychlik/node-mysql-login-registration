var snowflake = require('snowflake-sdk');
//var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
//const methodOverride = require('method-override');
const session = require('express-session');
const app = express();
var cors = require("cors");
let bodyParser=require("body-parser");
var connection = snowflake.createConnection( {
  account: 'kaa75937.us-east-1',
  username: 'srvconfig',
  password: 'srvconfig$1',
  database: 'MAHITIX'
  }
);

connection.connect( 
  function(err, conn) {
      if (err) {
          console.error('Unable to connect: ' + err.message);
          } 
      else {
          console.log('Successfully connected to Snowflake test account.');
          // Optional: store the connection ID.
          connection_ID = conn.getId();
          }
      }
  );
 



app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));


//set default engine, and provide [handlebars as] extension
app.set('view engine', 'handlebars'); 
app.get('/', routes.index);//call for main index page
app.get('/signup', user.signup);//call for signup page
app.post('/signup', user.signup);//call for signup post 
app.get('/reset', user.reset);//call for signup page
app.post('/reset', user.reset);//call for signup page
app.post('/forgot', user.forgot);//call for signup post 
app.get('/forgot', user.forgot);//call for signup post 
app.get('/login', routes.index);//call for login page
app.post('/login', user.login);//call for login post
//app.use('/home', user);
app.get('/home/dashboard', user.dashboard);//call for dashboard page after login
app.get('/home/logout', user.logout);//call for logout
app.get('/profile',user.profile);//to render users profile
app.post('/profile', user.editprofile);//to render users profile
app.get('/verification/', user.verify);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
