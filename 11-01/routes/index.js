var express = require('express');
var router = express.Router();
var mysql=require('mysql')
var connection=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'yingying',
    database:'node'
})
/* GET home page. */
router.post('/list', function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  var a=req.body.a
  connection.query(`SELECT * FROM index2 WHERE name LIKE '%${a}%' OR age LIKE '%${a}%'`,function (err,rows) {
      res.send(rows)
    })
});

module.exports = router;
