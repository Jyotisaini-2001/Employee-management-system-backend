// routes/employees.js

const express = require('express');
const router = express.Router();
const connection = require('../config/connection');

// Route handler for fetching all employees
router.get('/', (req, res) => {
  const query = 'SELECT * FROM employees ORDER BY id desc';
  connection.query(query, (err, rows) => {
    if (err) {
      console.error('Error fetching employees:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(rows);
    }
  });
});

// Route handler for fetching an individual employee by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM employees WHERE id = ?';
  connection.query(query, [id], (err, rows) => {
    if (err) {
      console.error('Error fetching employee by ID:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else if (rows.length === 0) {
      res.status(404).json({ error: 'Employee not found' });
    } else {
      res.json(rows[0]);
    }
  });
});

// Route handler for updating an employee by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, address, state, department } = req.body;
  const query = 'UPDATE employees SET name = ?, address = ?, state = ?, department = ? WHERE id = ?';
  connection.query(query, [name, address, state, department, id], (err, result) => {
    if (err) {
      console.error('Error updating employee by ID:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Employee not found' });
    } else {
      res.status(200).json({ message: 'Employee updated successfully' });
    }
  });
});

// Route handler for deleting an employee by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM employees WHERE id = ?';
  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting employee by ID:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Employee not found' });
    } else {
      res.status(200).json({ message: 'Employee deleted successfully' });
    }
  });
});

module.exports = router;
