const { prompt, default: inquirer} = require ('inquirer');
const mysql = require ('mysql2');
require = ('console.table');

const port = 3000;


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Fayrishta8!',
    database: 'employee_db'
}, 
console.log('Connected to the employee_db database.')).promise();

const viewDepartment = async () => {
    const [departmentData] = await db.query('SELECT * FROM department');
    console.table(departmentData);
    mainMenu();
}; 

const viewEmployees = async () => {
  const [employeeData] = await db.query("SELECT * FROM employee");
  console.table(employeeData);
  mainMenu();
}; 

const viewRoles = async () => {
  const [roles] = await db.query("SELECT * FROM role");
  console.table(roleData);
  mainMenu();
}; 

const addEmployee = async () => {
    const [roles] = await db.query('SELECT * FROM role');
    const roleList = roles.map((eachEmployee) => {
        return {name: eachEmployee.first_name + eachEmployee.last_name, value: eachEmployee.id};
    });

    await prompt([
      {
        type: "input",
        message: "What is the employee's first name?",
        name: "first_name",
      },
      {
        type: "input",
        message: "What is the employee's last name?",
        name: "last_name",
      },
      {
        type: "rawlist",
        message: "What is their role?",
        name: "role_id",
        choices: roleList,
      },
      {
        type: "list",
        name: "manager_id",
        message: "Who is their manager?",
        choices: employeeList,
      }
    ]).then (function (answers) {
        db.query('INSERT INTO employee SET ?' , {
            first_name: answers.first_name,
            last_name: answers.last_name,
            role_id: answers.role_id,
            manager_id: answers.manager_id
        })
        console.log('--Employee Added');
        mainMenu();
    });
};

