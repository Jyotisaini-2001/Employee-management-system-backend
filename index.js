const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const router = express.Router();
const connection = require('./config/db');

// Increase the JSON payload limit to 50MB
app.use(bodyParser.json({ limit: '50mb' }));

app.use(cors());
app.use(express.json());


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.post('/submit-form', (req, res) => {
  const { name, image, address, state, department} = req.body;

  const query = 'INSERT INTO employees (name, image, address, state, department) VALUES (?, ?, ?, ?, ?)';
  connection.query(query, [name, image, address, state, department], (err, result) => {
    if (err) {
      console.error('Error inserting employee data:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('Employee data inserted successfully');
    }
  });
});
// Import route handlers
const employeesRouter = require('./routes/employees');

// Use route handlers
app.use('/api/employees', employeesRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
