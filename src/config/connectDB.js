const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'clu',
    password: 'clu',
    database: 'clu',
});

export default connection;