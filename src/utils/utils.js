const displayDepartments = async (db) => {
  // execute mysql query
  const departments = await db.query(
    "SELECT id, name AS Department FROM department"
  );

  // log/table departments
  return console.table(departments);
};

const displayRoles = async (db) => {
  // execute mysql query
  const roles = await db.query(
    "SELECT role.id, role.title AS Role, role.salary AS Salary, department.name AS Department FROM role JOIN department ON role.departmentId = department.id ORDER BY department.name;"
  );

  // log/table roles
  return console.table(roles);
};

const displayEmployees = async (db) => {
  // execute mysql query
  const employees = await db.query(
    "SELECT employee_role.id, employee_role.firstName AS Name, employee_role.lastName AS Surname, title AS Role, salary AS Salary, name AS Department FROM employee employee_role LEFT JOIN role ON employee_role.roleId=role.id LEFT JOIN department ON role.departmentId=department.id ORDER BY employee_role.id"
  );

  // log/table employees
  return console.table(employees);
};

const displayEmployeesByManager = async (db) => {
  // execute mysql query
  const employees = await db.query("SELECT * FROM employee ORDER BY ");

  // log/table employees
  return console.table(employees);
};

const displayEmployeesByDepartment = async (db) => {
  // execute mysql query
  const employees = await db.query(
    "SELECT employee_role.firstName AS Name, employee_role.lastName AS Surname, title AS Role, salary AS Salary, name AS Department FROM employee employee_role LEFT JOIN role ON employee_role.roleId=role.id LEFT JOIN department ON role.departmentId=department.id ORDER BY department.name;"
  );

  // log/table employees
  return console.table(employees);
};

const getDepartments = async (db) => {
  // execute mysql query
  const departments = await db.query("SELECT * FROM department");

  // return departments
  return departments;
};

const getRoles = async (db) => {
  // execute mysql query
  const roles = await db.query("SELECT * FROM role");

  // return roles
  return roles;
};

const getEmployees = async (db) => {
  // execute mysql query
  const employees = await db.query("SELECT * FROM employee");

  // return employees
  return employees;
};

const generateRoleChoices = (roles) => {
  return roles.map((role) => {
    return {
      name: role.title,
      value: role.id,
    };
  });
};

const generateDepartmentChoices = (departments) => {
  return departments.map((department) => {
    return {
      name: department.name,
      value: department.id,
    };
  });
};

const generateEmployeeChoices = (employees) => {
  return employees.map((employee) => {
    return {
      name: employee.firstName,
      value: employee.id,
    };
  });
};

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

module.exports = {
  displayDepartments,
  displayRoles,
  displayEmployees,
  getDepartments,
  getRoles,
  getEmployees,
  displayEmployeesByDepartment,
  displayEmployeesByManager,
  generateRoleChoices,
  generateDepartmentChoices,
  generateManagerChoices,
  generateEmployeeChoices,
};
