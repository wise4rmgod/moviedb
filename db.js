// db.js
const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: "localhost", // Change to your MySQL host
//   user: "root", // Change to your MySQL username
//   password: "", // Change to your MySQL password
//   database: "movie_db",
//   ssl: { ciphers: "DHE-RSA-AES256-SHA" },
// });

const db = mysql.createConnection({
  host: "db-shared-us-west-1-115304.aptible.in", // Change to your MySQL host
  user: "aptible", // Change to your MySQL username
  password: "aYABNyPuk-FheBP63SUkCXcd-61f3ArS", // Change to your MySQL password
  database: "db",
  ssl: { rejectUnauthorized: false, ciphers: "DHE-RSA-AES256-SHA" },
  port: 26038,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    throw err;
  }
  console.log("Connected to the database");
});

module.exports = db;
