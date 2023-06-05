const mysql = require("mysql2"); // Connect to the DB

// Create the pool
const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "student_counselling",
    waitForConnections: true,
    connectionLimit: 2,
    queueLimit: 0
});

// Get a Promise wrapped instance of that pool
const promisePool = pool.promise();

module.exports = promisePool;