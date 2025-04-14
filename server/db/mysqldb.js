const mysql = require("mysql2");

// creating the connections s
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "hulke@123",
  database: "blogs_db",
});

module.exports = pool;
