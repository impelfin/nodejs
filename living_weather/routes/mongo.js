const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const request = require('request');
const moment = require('moment');
const dateutil = require('date-utils');

var newDate = new Date();
var now = newDate.toFormat("YYYYMMDDHH");

var keys='B%2FNiJnYmkZV1%2FK7ulvZI4MoSXvCTDfNAd0Snw%2Bk6g4%2BbMk1LoGVhd75DJahjv4K35Cr9jh9RX0j%2BM89grKBYsw%3D%3D'
var url = 'http://apis.data.go.kr/1360000/LivingWthrIdxServiceV2/getUVIdxV2';
var queryParams = '?' + encodeURIComponent('serviceKey') + keys; /* Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('XML'); /* */
queryParams += '&' + encodeURIComponent('areaNo') + '=' + encodeURIComponent('1100000000'); /* */
queryParams += '&' + encodeURIComponent('time') + '=' + encodeURIComponent(now); /* */

// getdata
router.get('/getdata', function(req, res, next) {
  request({
      url: url + queryParams,
      method: 'GET'
  }, function (error, response, body) {
      console.log('Status', response.statusCode);
      console.log('Headers', JSON.stringify(response.headers));
      console.log('Reponse received', body);
      res.json(JSON.stringify(response));
  });
});

//define scheme
var weatherSchema = mongoose.Schema({
      code: String,
      areaNo : Number,
      date : Date,
      today : Number,
      tomorrow : Number,
      dayaftertomorrow : Number
});

var Weather = mongoose.model('weathers',weatherSchema);

// list
router.get('/list', function(req, res, next) {
      Weather.find({},function(err,docs){
           if(err) console.log('err');
           res.writeHead(200);
           var template = `
           <!doctype html>
           <html>
           <head>
             <title>Result</title>
             <meta charset="utf-8">
           </head>
           <body>
             ${docs}
           </body>
           </html>
          `;
           res.end(template);
      });
});

// get
router.get('/get', function(req, res, next) {
      db = req.db;
      var input = req.query.input
      Weather.find({'date':{"$gte":input}},function(err,doc){
           if(err) console.log('err');
            res.send(doc);
      });
});


module.exports = router;

Weather.find({}).exec(function(err,weathers){
      console.log("Query 1");
      console.log(weathers+"\n");
      return;
});
