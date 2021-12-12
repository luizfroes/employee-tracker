const inquirer = require("inquirer");
const nodemon = require("nodemon");

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
  getDepartments,
  getRoles,
  getEmployees,
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

    if (chosenAction === "addARole") {
      // get departments from DB
      const departments = await getDepartments(db);

      const generateDepartmentChoices = (departments) => {
        return departments.map((department) => {
          return {
            name: department.name,
            value: department.id,
          };
        });
      };

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

      // prompt question to select department, title, salary and get answers
      const { departmentId, title, salary } = await inquirer.prompt(
        addRoleQuestion
      );

      // construct mysql insert query for role
      const query = `INSERT INTO role (title, salary, departmentId) VALUES ("${title}", "${salary}", "${departmentId}")`;

      // execute mysql query
      await db.query(query);
    }

    if (chosenAction === "addAEmployee") {
      // get roles from DB
      const roles = await getRoles(db);

      // get employees from DB
      const employees = await getEmployees(db);

      // pass the roles to a choice constructor function
      const generateRoleChoices = (roles) => {
        return roles.map((role) => {
          return {
            name: role.title,
            value: role.id,
          };
        });
      };

      // pass the employees to a choice constructor function
      const generateManagerChoices = (employees) => {
        const defaultChoices = [{ name: "None", value: "NULL" }];

        const choices = employees.map((employee) => {
          return {
            name: employee.firstName,
            value: employee.id,
          };
        });

        const managerChoices = defaultChoices.concat(choices);

        return managerChoices;
      };

      const addEmployeeQuestion = [
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
          message: "Please select a role:",
          name: "roleId",
          choices: generateRoleChoices(roles),
        },
        {
          type: "list",
          message: "Please select a Manager:",
          name: "managerId",
          choices: generateManagerChoices(employees),
        },
      ];

      // prompt question to select role, select manager, first name, last name and get answers
      const { firstName, lastName, roleId, managerId } = await inquirer.prompt(
        addEmployeeQuestion
      );

      // construct mysql insert query for employee
      const query = `INSERT INTO employee (firstName, lastName, roleId, managerId) VALUES ("${firstName}", "${lastName}", "${roleId}", ${managerId})`;

      console.log(query);
      // execute mysql query
      await db.query(query);
    }

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
