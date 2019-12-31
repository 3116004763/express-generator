var express = require('express');
var router = express.Router();
var mysql = require('mysql')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var connnection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'515500',
  database:'test'
})

connnection.connect()

connnection.query('select * from user where age=21',function(err,rows,fields) {
  if(err) throw err;
  console.log('rows: '+JSON.stringify(rows))
})

connnection.end()
module.exports = router;
