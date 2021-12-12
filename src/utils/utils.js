const displayDepartments = async (db) => {
  // execute mysql query
  const departments = await db.query("SELECT * FROM department");

  // log/table departments
  return console.table(departments);
};

const displayRoles = async (db) => {
  // execute mysql query
  const roles = await db.query(
    "SELECT role.id, role.title, role.salary, department.name FROM role JOIN department ON role.departmentId = department.id ORDER BY department.name;"
  );

  // log/table roles
  return console.table(roles);
};

const displayEmployees = async (db) => {
  // execute mysql query
  const employees = await db.query(
    "SELECT employee_role.firstName, employee_role.lastName, title, salary, name FROM employee employee_role LEFT JOIN role ON employee_role.roleId=role.id LEFT JOIN department ON role.departmentId=department.id"
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
    "SELECT employee_role.firstName, employee_role.lastName, title, salary, name FROM employee employee_role LEFT JOIN role ON employee_role.roleId=role.id LEFT JOIN department ON role.departmentId=department.id ORDER BY department.name;"
  );

  // log/table employees
  return console.table(employees);
};

const getDepartments = (db) => {
  // execute mysql query
  // return departments
};

const getRoles = (db) => {
  // execute mysql query
  // return roles
};

const getEmployees = (db) => {
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

const generateDepartmentChoices = (departments) => {
  //generate Department Choices
};

const generateRoleChoices = (roles) => {
  //generate Role Choices
};

const generateManagerChoices = (managers) => {
  // generate Manager Choices
};

module.exports = {
  displayDepartments,
  displayRoles,
  displayEmployees,
  getDepartments,
  getRoles,
  getEmployees,
  constructDepartmentChoices,
  constructRoleChoices,
  constructEmployeeChoices,
  generateDepartmentChoices,
  generateRoleChoices,
  generateManagerChoices,
};
