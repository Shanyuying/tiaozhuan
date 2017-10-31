var express = require('express');
var router = express.Router();
var mysql=require('mysql')
var connection=mysql.createPool({
  host:'localhost',
  user: 'root',
  password: 'yingying'
})
router.get('/list', function(req, res, next) {
	connection.query('SELECT id,name FROM node.index1',function(err,rows,fields){
		res.header('Access-Control-Allow-Origin',"*")
		res.send(rows);
	})
});
router.post('/detail', function(req, res, next) {
	connection.query('SELECT detail FROM node.index1 where id='+req.body.id+'',function(err,rows,fields){
		res.header('Access-Control-Allow-Origin',"*")
	  res.send(rows);
})
});
module.exports = router;