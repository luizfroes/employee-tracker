const inquirer = require("inquirer");

const Db = require("./lib/DB");

const {
  openingQuestion,
  addDepartmentQuestion,
  addRoleQuestion,
  addEmployeeQuestion,
} = require("./questions");

const {
  displayDepartments,
  displayRoles,
  displayEmployees,
} = require("./utils/utils");

const start = async () => {
  const db = new Db({
    host: process.envDB_HOST || "localhost",
    user: process.envDB_USER || "root",
    password: process.envDB_PASSWORD || "@Password123",
    database: process.envDB_NAME || "company_db",
  });

  await db.start();

  let inProgress = true;

  while (inProgress) {
    // prompt question and get answer (action)
    const { chosenAction } = await inquirer.prompt(openingQuestion);
    console.log(chosenAction);

    // insert if blocks for all actions
    if (chosenAction === "addADepartment") {
      //prompt department questions (name) and get answers
      const { department } = await inquirer.prompt(addDepartmentQuestion);

      // construct mysql insert query
      const query = `INSERT INTO department (name) VALUE ("${department}")`;

      // execute mysql query
      await db.query(query);
    }

    if (chosenAction === "addRole") {
      // get departments from DB
      const departmentsFromDB = db.query("SELECT * FROM jobRole");
      // pass the departments to a choice constructor function
      // prompt question to select department, title, salary and get answers
      //const role = await inquirer.prompt(addRoleQuestion);

      // construct mysql insert query for role
      // execute mysql query
    }

    //if (chosenAction === "addAEmployee") {
    // get roles from DB
    // get employees from DB
    // pass the roles to a choice constructor function
    // pass the employees to a choice constructor function
    // prompt question to select role, select manager, first name, last name and get answers
    //const employee = await inquirer.prompt(addEmployeeQuestion);

    // construct mysql insert query for employee
    // execute mysql query
    //}

    //if (chosenAction === "deleteARole") {
    // get roles from DB
    // construct mysql delete query
    // execute mysql query
    // }

    //if (chosenAction === "deleteADepartment") {
    // get departments from DB
    // construct mysql delete query
    // execute mysql query
    //}

    //if (chosenAction === "deleteAEmployee") {
    // get employees from DB
    // construct mysql delete query
    // execute mysql query
    //}

    //if (chosenAction === "updateEmployeeRole") {
    // get employees from DB
    // construct mysql update query
    // execute mysql query
    //}

    //if (chosenAction === "updateEmployeeManagers") {
    // get employees from DB
    // construct mysql update query
    // execute mysql query
    //}

    if (chosenAction === "viewAllDepartments") {
      displayDepartments(db);
    }

    if (chosenAction === "viewAllRoles") {
      displayRoles(db);
    }

    if (chosenAction === "viewAllEmployees") {
      displayEmployees(db);
    }

    //if (chosenAction === "viewEmployeesByManager") {
    // construct mysql view query ordered by manager
    // execute mysql query
    //}

    //if (chosenAction === "viewEmployeesByDepartment") {
    // construct mysql view query ordered by department
    // execute mysql query
    // }

    //if (chosenAction === "viewDepartmentBudget") {
    // get departments budget from DB
    // pass the departments budget add function
    // og the result
    //}

    if (chosenAction === "quit") {
      inProgress = false;
    }
  }
};

start();
