const displayDepartments = () => {
  // execute mysql query
  const departments = await db.query("SELECT * FROM departments");

  // log/table departments
  return console.table(departments);
};

const displayRoles = () => {
  // execute mysql query
  const roles = await db.query("SELECT * FROM roles");

  // log/table roles
  return console.table(roles);
};

const displayEmployees = () => {
  // execute mysql query
  const employees = await db.query("SELECT * FROM employees");

  // log/table employees
  return console.table(employees);
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
