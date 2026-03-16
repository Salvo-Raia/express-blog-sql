const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db_recipes",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Database connected successfully");
});

module.exports = connection;
