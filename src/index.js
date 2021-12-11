const inquirer = require("inquirer");
const {
  openingQuestion,
  addDepartmentQuestion,
  addRoleQuestion,
  addEmployeeQuestion,
} = require("./questions");

const displayDepartments = () => {
  // execute mysql query
  // log/table departments
};

const displayRoles = () => {
  // execute mysql query
  // log/table roles
};

const displayEmployees = () => {
  // execute mysql query
  // log/table employees
};

const getDepartments = () => {
  // execute mysql query
  // return departments
};

const getRoles = () => {
  // execute mysql query
  // return roles
};

const getEmployees = () => {
  // execute mysql query
  // return employees
};

const constructDepartmentChoices = (departments) => {
  // return an array of department choices
};

const constructRoleChoices = (roles) => {
  // return an array of role choices
};

const constructEmployeeChoices = (roles) => {
  // return an array of employee choices
};

// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     // MySQL username,
//     user: 'root',
//     // MySQL password
//     password: '',
//     database: 'classlist_db',
//   },
//   console.log(`Connected to the classlist_db database.`)
// );

const start = async () => {
  // prompt question and get answer (action)
  const chosenAction = await inquirer.prompt(openingQuestion);

  // insert if blocks for all actions
  if (chosenAction === "addDepartment") {
    // prompt department questions (name) and get answers
    const department = await inquirer.prompt(addDepartmentQuestion);

    // construct mysql insert query
    // execute mysql query
  }

  if (chosenAction === "addRole") {
    // get departments from DB
    // pass the departments to a choice constructor function
    // prompt question to select department, title, salary and get answers
    const role = await inquirer.prompt(addRoleQuestion);

    // construct mysql insert query for role
    // execute mysql query
  }

  if (chosenAction === "addAEmployee") {
    // get roles from DB
    // get employees from DB
    // pass the roles to a choice constructor function
    // pass the employees to a choice constructor function
    // prompt question to select role, select manager, first name, last name and get answers
    const employee = await inquirer.prompt(addEmployeeQuestion);

    // construct mysql insert query for employee
    // execute mysql query
  }

  if (chosenAction === "deleteARole") {
    // prompt department questions (name) and get answers
    // construct mysql insert query
    // execute mysql query
  }

  if (chosenAction === "deleteADepartment") {
    // prompt department questions (name) and get answers
    // construct mysql insert query
    // execute mysql query
  }

  if (chosenAction === "deleteAEmployee") {
    // prompt department questions (name) and get answers
    // construct mysql insert query
    // execute mysql query
  }

  if (chosenAction === "updateEmployeeRole") {
    // prompt department questions (name) and get answers
    // construct mysql insert query
    // execute mysql query
  }

  if (chosenAction === "updateEmployeeManagers") {
    // prompt department questions (name) and get answers
    // construct mysql insert query
    // execute mysql query
  }

  if (chosenAction === "viewAllDepartments") {
    // get departments from DB
    // pass the departments to a choice constructor function
    // prompt question to select department, title, salary and get answers
    // construct mysql insert query for role
    // execute mysql query
  }

  if (chosenAction === "viewAllRoles") {
    // prompt department questions (name) and get answers
    // construct mysql insert query
    // execute mysql query
  }

  if (chosenAction === "viewAllEmployees") {
    // prompt department questions (name) and get answers
    // construct mysql insert query
    // execute mysql query
  }

  if (chosenAction === "viewEmployeesByManager") {
    // prompt department questions (name) and get answers
    // construct mysql insert query
    // execute mysql query
  }

  if (chosenAction === "viewEmployeesByDepartment") {
    // prompt department questions (name) and get answers
    // construct mysql insert query
    // execute mysql query
  }

  if (chosenAction === "viewDepartmentBudget") {
    // get departments from DB
    // pass the departments to a choice constructor function
    // prompt question to select department, title, salary and get answers
    // construct mysql insert query for role
    // execute mysql query
  }

  if (chosenAction === "quit") {
    // get departments from DB
    // pass the departments to a choice constructor function
    // prompt question to select department, title, salary and get answers
    // construct mysql insert query for role
    // execute mysql query
  }
};

start();
