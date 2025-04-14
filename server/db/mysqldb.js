const mysql = require("mysql2");

// creating the connections s
const pool = mysql.createPool({
  host: "localhost",
  user: "D1_89470_Tanay",
  password: "Manager@12345",
  database: "blogs_db",
});

module.exports = pool;
