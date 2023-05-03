const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ecf'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database with connection ID: ' + db.threadId);
});

app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error('Error inserting user into MySQL database: ' + err.stack);
      res.status(500).send('Error inserting user into MySQL database');
      return;
    }
    res.status(200).send('User inserted into MySQL database');
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error('Error selecting user from MySQL database: ' + err.stack);
      res.status(500).send('Error selecting user from MySQL database');
      return;
    }
    if (result.length === 0) {
      res.status(401).send('Email or password incorrect');
      return;
    }
    res.status(200).send('Login successful');
  });
});

const port = process.env.PORT || 3306;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
