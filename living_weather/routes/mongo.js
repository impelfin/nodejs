const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//define scheme
var weatherSchema = mongoose.Schema({
      code: String,
      areaNo : Number,
      date : String,
      today : Number,
      tomorror : Number
});

var Weather = mongoose.model('weather',weatherSchema);

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
      Weather.findOne({'date':input},function(err,doc){
           if(err) console.log('err');
            res.send(doc);
      });
});


module.exports = router;

Weather.find({}).exec(function(err,weather){
      console.log("Query 1");
      console.log(weather+"\n");
      return;
});
