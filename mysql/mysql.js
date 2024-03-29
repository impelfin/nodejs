var express = require("express");
var mysql = require("mysql");
const env =require("dotenv").config({ path:"/data/node/config/.env"});

var connection = mysql.createConnection({
  host : process.env.host,
  user : process.env.user,
  password : process.env.password,
  database : process.env.database
})

var app = express();

connection.connect(function(err) {
  if(!err) {
    console.log("Database is connected...\n\n");
  } else {
    console.log("Error connecting database...\n\n");
  }
});

app.get('/', function(req, res) {
  connection.query('select * from st_info', function(err, rows, fields) {
    connection.end();
    if(!err) {
      res.send(rows);
      console.log('The solution is : ', rows);
    } else {
      console.log('Error while perfoming Query ');
    }
  })
})

app.listen(8080, function () {
  console.log('8080 Port : Server started...');
})
