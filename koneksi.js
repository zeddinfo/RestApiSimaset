let mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'simaset'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('mysql terkoneksi'); 
});

module.exports = conn;