//var snowflake = require('snowflake-sdk');
const mysql = require('mysql');
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


const httpProxy = require('http-proxy');
const proxy = httpProxy.createServer({});


app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(
session({
    resave: false,
    saveUninitialized: true,
    secret: "anyrandomstring",
  })
);


/*

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
});*/

let connection = mysql.createConnection({
     host: 'cloud19.hostgator.com',
    user: 'uzaqleuw_root',
    password: '3Hotdogs!',
    database: 'uzaqleuw_Simpledatabase'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
   var userId = 0;
app.get('/dashboard', (req, res, next) => {
  console.log("dashboard session",req.sessionID);
    // userId = req.sessionID;
   console.log('ddd=' + userId);
  
   if (userId == null) {
      res.redirect("/login");
      return;
   }
   
   var sql = "SELECT * FROM `Accounts` WHERE `ID`='" + userId + "'";
connection.query(sql, [userId], function (err,  result, fields) {
 if (err) {
            console.error('Failed to execute statement due to the following error: ' + err.message);
         }
         else {

           // res.redirect('http://localhost:3001/dashboard');
            res.sendFile(path.join(__dirname, './client/src/components/dashboard.html'));
         }
         });
   });
   
     
    


app.get('/login', (req, res) => {
 res.json({ data: "respond with a resource" });
});
app.post('/login', (req, res) => {
// res.json({ data: "respond with a resource" });
//Login goes here
 var message = '';
  var sess = req.session;
   console.log('sess',sess);
   if (req.method == "POST") {
      var post = req.body;
      var Email = post.email;
      var Pass = post.password;

      console.log('Body',post);
  

var sql = 'select `ID`, `EMAIL`,`PASSWORD` from `Accounts` where `EMAIL` = ? and `PASSWORD` = ?;';
connection.query(sql, [Email,Pass], function (err,  result, fields) {
  if (err) {
               console.error('Failed to execute statement due to the following error: ' + err.message);
            }
            else {
               console.log('Successfully executed statement: ');
            console.log("Total Records:- " + result.length);
               if (result.length < 1) {
                  message = 'Wrong Credentials.';
                //  res.use('index.ejs', { message: message });
               } else {
                  console.error('login successful');
                  //sess.userId = result.ID;
                userId = result[0].ID;
                  console.log('ID:', userId);
                  res.redirect('/dashboard');
               }
            }
         });
   }
});


app.get('/', (req, res) => {
 res.json({ data: "respond with a resource" });
});
app.listen(3001, () => {
    console.log('running on port 3001');
});