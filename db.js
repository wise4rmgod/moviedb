// db.js
const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: "localhost", // Change to your MySQL host
//   user: "root", // Change to your MySQL username
//   password: "", // Change to your MySQL password
//   database: "movie_db",
// });

const db = mysql.createConnection(
  "mysql://aptible:aYABNyPuk-FheBP63SUkCXcd-61f3ArS@db-shared-us-west-1-115304.aptible.in:26038/db"
);

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    throw err;
  }
  console.log("Connected to the database");
});

module.exports = db;
