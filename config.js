const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Auriga2021',
    database: 'auriga_bd',

})

module.exports = connection;