const mysql = require('mysql2');
const connection = require('../db/connection');
require('dotenv').config();



const updateEmployee = (role, employee) => {
    db.query(`UPDATE employee SET role_id = ? WHERE first_name = ?`, [role, employee])
} 

module.exports = updateEmployee;