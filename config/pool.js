const mysql = require("mysql2");
//const dbsecret = require("./mysql.json");
const pool = mysql.createPool(
  {
  host : "database-1.c9tceinqozeu.ap-northeast-2.rds.amazonaws.com",
  user : "admin",
  password : "admin1234",
  database : "st_db"
  }
);
const promisePool = pool.promise();

module.exports = promisePool;
