var mysql=require('mysql')
var  pool=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mohit@2023',
    database:'carmanage',
    multipleStatements:true,
})

module.exports = pool;
