// db.js
const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: "localhost", // Change to your MySQL host
//   user: "root", // Change to your MySQL username
//   password: "", // Change to your MySQL password
//   database: "movie_db",
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

const createTable = `
  CREATE TABLE IF NOT EXISTS movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(255) NOT NULL,
    video_url VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    description TEXT,
    rating DECIMAL(3, 1),
    release_year INT
  )
`;

db.query(createTable, (err) => {
  if (err) {
    console.error("Error creating movies table:", err);
  } else {
    console.log("Movies table created or already exists");
  }
});

module.exports = db;
