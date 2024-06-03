# Employee Management System

This project is a simple employee management system.

## Getting Started

To get started, follow these steps:

1. **Start the Server:**
   - Open your terminal.
   - Navigate to the project directory.
   - Run the following command:
     ```bash
     node index.js
     ```

2. **Create a Database:**
   - Open your MySQL client or command-line interface.
   - Run the following SQL query to create a database named "employee-management":
     ```sql
     CREATE DATABASE IF NOT EXISTS employee-management;
     ```

3. **Create a Table:**
   - Within the "employee-management" database, run the following SQL query to create a table named "employees" with fields for name, image, address, state, and department:
     ```sql
     USE employee-management;

     CREATE TABLE IF NOT EXISTS employees (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(255),
         image VARCHAR(255),
         address VARCHAR(255),
         state VARCHAR(255),
         department VARCHAR(255)
     );
     ```

## Notes

- Ensure you have Node.js and MySQL installed on your system.
- Replace `'your_username'` and `'your_password'` in `index.js` with your MySQL username and password respectively.

Happy managing your employees!
