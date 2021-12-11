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
    ],
  },
];
