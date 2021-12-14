const inquirer = require("inquirer");
const nodemon = require("nodemon");

const Db = require("./lib/DB");

const { openingQuestions, addDepartmentQuestion } = require("./questions");

const {
  displayDepartments,
  displayRoles,
  displayEmployees,
  getDepartments,
  getRoles,
  getEmployees,
  displayEmployeesByDepartment,
  generateRoleChoices,
  generateManagerChoices,
  generateEmployeeChoices,
  generateDepartmentChoices,
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
    const { chosenAction } = await inquirer.prompt(openingQuestions);

    // get departments from DB
    const departments = await getDepartments(db);

    // get roles from DB
    const roles = await getRoles(db);

    // get employees from DB
    const employees = await getEmployees(db);

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
      const generateDepartmentChoices = (departments) => {
        return departments.map((department) => {
          return {
            name: department.name,
            value: department.id,
          };
        });
      };

      const addRoleQuestions = [
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

      if (!departments.length) {
        console.log("Please add a Department first!!");

        return start();
      }

      // prompt question to select department, title, salary and get answers
      const { departmentId, title, salary } = await inquirer.prompt(
        addRoleQuestions
      );

      // construct mysql insert query for role
      const query = `INSERT INTO role (title, salary, departmentId) VALUES ("${title}", "${salary}", "${departmentId}")`;

      // execute mysql query
      await db.query(query);
    }

    if (chosenAction === "addAEmployee") {
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
          choices: generateManagerChoices(employees),
        },
      ];

      if (!roles.length) {
        console.log("Please add a Role first!!");

        return start();
      }

      // prompt question to select role, select manager, first name, last name and get answers
      const { firstName, lastName, roleId, managerId } = await inquirer.prompt(
        addEmployeeQuestion
      );

      // construct mysql insert query for employee
      const query = `INSERT INTO employee (firstName, lastName, roleId, managerId) VALUES ("${firstName}", "${lastName}", "${roleId}", ${managerId})`;

      // execute mysql query
      await db.query(query);
    }

    if (chosenAction === "deleteARole") {
      if (!roles.length) {
        console.log("There is no Role to delete");

        return start();
      }

      const deleteRoleQuestion = [
        {
          type: "list",
          message: "Please select a role:",
          name: "roleId",
          choices: generateRoleChoices(roles),
        },
      ];

      const { roleId } = await inquirer.prompt(deleteRoleQuestion);

      // construct mysql delete query
      const query = `DELETE FROM role WHERE id=${roleId}`;

      // execute mysql query
      db.query(query);
    }

    if (chosenAction === "deleteADepartment") {
      if (!departments.length) {
        console.log("There is no Department to delete");

        return start();
      }

      const deleteDepartmentQuestion = [
        {
          type: "list",
          message: "Please select a department:",
          name: "departmentId",
          choices: generateDepartmentChoices(departments),
        },
      ];

      const { departmentId } = await inquirer.prompt(deleteDepartmentQuestion);

      // construct mysql delete query
      const query = `DELETE FROM department WHERE id=${departmentId}`;

      // execute mysql query
      db.query(query);
    }

    if (chosenAction === "deleteAEmployee") {
      if (!departments.length) {
        console.log("There is no Employee to delete");

        return start();
      }

      const deleteEmployeeQuestion = [
        {
          type: "list",
          message: "Please select an Employee:",
          name: "employeeId",
          choices: generateEmployeeChoices(employees),
        },
        {
          type: "list",
          message: "Please select a role:",
          name: "roleId",
          choices: generateRoleChoices(roles),
        },
      ];

      const { employeeId } = await inquirer.prompt(deleteEmployeeQuestion);

      // construct mysql delete query
      const query = `DELETE FROM employee WHERE id=${employeeId}`;

      // execute mysql query
      db.query(query);
    }

    if (chosenAction === "updateEmployeeRole") {
      if (!employees.length) {
        console.log("There is no Employee to update");

        return start();
      }

      const updateEmployeeRoleQuestions = [
        {
          type: "list",
          message: "Please select the Employee you would like to update:",
          name: "employeeId",
          choices: generateEmployeeChoices(employees),
        },
        {
          type: "list",
          message: "Please select the employee new role:",
          name: "roleId",
          choices: generateRoleChoices(roles),
        },
      ];

      const { employeeId, roleId } = await inquirer.prompt(
        updateEmployeeRoleQuestions
      );

      // construct mysql update query
      const query = `UPDATE employee SET roleId = ${roleId} WHERE id = ${employeeId}`;

      // execute mysql query
      db.query(query);
    }

    if (chosenAction === "updateEmployeeManagers") {
      if (!employees.length) {
        console.log("There is no Employee to update");

        return start();
      }

      const updateEmployeeRoleQuestions = [
        {
          type: "list",
          message: "Please select the Employee you would like to update:",
          name: "employeeId",
          choices: generateEmployeeChoices(employees),
        },
        {
          type: "list",
          message: "Please select the employee new Manager:",
          name: "managerId",
          choices: generateDepartmentChoices(employees),
        },
      ];

      const { employeeId, managerId } = await inquirer.prompt(
        updateEmployeeRoleQuestions
      );

      // construct mysql update query
      const query = `UPDATE employee SET managerId = ${managerId} WHERE id = ${employeeId}`;

      // execute mysql query
      db.query(query);
    }

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

    if (chosenAction === "viewEmployeesByDepartment") {
      displayEmployeesByDepartment(db);
    }

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
