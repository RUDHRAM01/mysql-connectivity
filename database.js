//here we have two option createConnecion and createPool
//In createConnection we have to create the connection and we have to close the connection
//But in createPool we can create pool of connections
 
const { createPool } = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
    connectionLimit:10
})

pool.query('write here query (like : select * from rudhramTable)')