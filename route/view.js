const mysql = require('mysql2');
const table = require('console.table');

require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'company_db'
    });

const viewDep = () => {
  db.query(`SELECT * FROM department ORDER BY id`, function (err, results) {
    console.log("");
    console.table(results);
  })
}

const viewRole = () => {
  db.query(`SELECT role.id, title, name AS department, salary 
            FROM role
            JOIN department
            ON role.department_id = department.id
            ORDER BY role.id`, function (err, results) {
    console.log("");
    console.table(results);
  })
}

const viewEmployees = () => {
  db.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, salary, CONCAT(managers.first_name, ' ', managers.last_name) AS manager
            FROM employee
            JOIN role
            ON employee.role_id = role.id
            JOIN department
            ON role.department_id = department.id
            LEFT JOIN employee AS managers
            ON employee.manager_id = managers.id
            ORDER BY employee.id`, function (err, results) {
    console.log('');
    console.table(results);
  })
}

module.exports = {viewDep, viewRole, viewEmployees};