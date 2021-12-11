const {
  generateRoleChoices,
  generateManagerChoices,
  generateDepartmentChoices,
} = require("./modules/utils");

const openingQuestion = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "chosenAction",
    choices: [
      {
        name: "Add a Department",
        value: "addADepartment",
      },
      {
        name: "Add a Role",
        value: "addARole",
      },
      {
        name: "Add a Employee",
        value: "addAEmployee",
      },
      {
        name: "Delete a Department",
        value: "deleteADepartment",
      },
      {
        name: "Delete a Role",
        value: "deleteARole",
      },
      {
        name: "Delete a Employee",
        value: "deleteAEmployee",
      },
      {
        name: "Update Employee Role",
        value: "updateEmployeeRole",
      },
      {
        name: "Update Employee Managers",
        value: "updateEmployeeManagers",
      },
      {
        name: "View all Departments",
        value: "viewAllDepartments",
      },
      {
        name: "View all Roles",
        value: "viewAllRoles",
      },
      {
        name: "View all Employees",
        value: "viewAllEmployees",
      },
      {
        name: "View Employees by Manager",
        value: "viewEmployeesByManager",
      },
      {
        name: "View Employees by Department",
        value: "viewEmployeesByDepartment",
      },
      {
        name: "View the total budget of a Department",
        value: "viewDepartmentBudget",
      },
      {
        name: "Quit",
        value: "quit",
      },
    ],
  },
];

const addDepartmentQuestion = [
  {
    type: "input",
    message: "What is the name of the Department you want to add?",
    name: "department",
  },
];

const addRoleQuestion = [
  {
    type: "list",
    message: "Please select a department:",
    name: "departmentId",
    choices: generateDepartmentChoices(departments),
  },
  {
    type: "input",
    message: "Please enter role title:",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter role salary:",
    name: "salary",
  },
];

const addEmployeeQuestion = [
  {
    type: "list",
    message: "Please select a role:",
    name: "roleId",
    choices: generateRoleChoices(roles),
  },
  {
    type: "input",
    message: "Please enter the First Name:",
    name: "firstName",
  },
  {
    type: "input",
    message: "Please enter the Last Name:",
    name: "lastName",
  },
  {
    type: "list",
    message: "Please select a Manager:",
    name: "managerId",
    choices: generateManagerChoices(managers),
  },
];
module.exports = {
  openingQuestion,
  addDepartmentQuestion,
  addRoleQuestion,
  addEmployeeQuestion,
};
