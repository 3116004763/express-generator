var express = require('express')
var router = express.Router()
var mysql = require('mysql')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource')
})

//连接mysql
// var connnection = mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'515500',
//   database:'test'
// })

// connnection.connect()

// connnection.query('select * from user where age=21',function(err,rows,fields) {
//   if(err) throw err;
//   console.log('rows: '+JSON.stringify(rows))
// })
// connnection.end()

//连接mongodb
// 过时的。
// var MongoClient = require('mongodb').MongoClient
// var url = 'mongodb://localhost:27017/runoob'

// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err
//     var dbase = db.db('runoob')
//     dbase.createCollection('site', function(err, res) {
//         if (err) throw err
//         console.log('创建集合!')
//         db.close()
//     })
// })

//试试新的,也是废弃的。再找新的。
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

var UserSchema = new Schema({
    name: String,
    password: String
})

UserModel = mongoose.model('User', UserSchema)

//设置数据库连接字符串
var DB_CONN_STR = 'mongodb://localhost:27017/note'
//连接到数据库
mongoose.connect(DB_CONN_STR)

//创建一个用户实体
var user = new UserModel({
    name: 'xyz22',
    password: 'debbie0604'
})
//将用户的实体插入数据库
user.save(function(err, user) {
    if (err) throw err
    console.log(user)
})

//模型查询符合条件的数据 模糊查询
UserModel.find(
    {
        name: /xyz/
    },
    { name: 1, password: 1 },
    function(err, userArrays) {
        if (err) throw err
        if (userArrays.length > 0) {
            console.log('存在')
            console.log(userArrays)
        } else {
            console.log('不存在')
        }
    }
)

module.exports = router
