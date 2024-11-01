const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '193.203.184.162',
    user: 'u936826252_daddy',
    password: 'MwW9pW=8',
    database: 'u936826252_daddy',
});

export default connection;