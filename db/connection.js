const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: 'company_db'
  });
  connection.connect(function(err){
      if(err) throw err
  })

  module.exports = connection