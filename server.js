const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'order_management',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database');
});

// API Endpoint Example
app.get('/api/incoming-orders', (req, res) => {
    const sql = 'SELECT * FROM orders WHERE status = "New"';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Start the Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});