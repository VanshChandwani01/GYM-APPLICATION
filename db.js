const Pool = require('pg').Pool;

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'master',
    password: 'admin',
    port:5432 
})

module.exports = pool;