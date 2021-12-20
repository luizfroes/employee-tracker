<h1>Employee Tracker</h1>

<h2>Table of Contents</h2>

- [Description](#description)
- [User Story](#user-story)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Video Walkthrough](#video-walkthrough)
- [Questions](#questions)

## Description

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. That is exactly what Employee Tracker does. It a command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## User Story

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Technologies Used

#### Languages

- JavaScript
- JQuery

#### Packages used

- Node.Js
- Inquirer
- Mysql2
- Dotenv
- Console.table

## Installation

To install the application follow the steps below:

```
npm install
```

## Usage

To use the application follow the steps below:

```
npm run start
```

## Video Walkthrough

Click [here](https://drive.google.com/file/d/1vY8UyUaPKDp7BSeCC6yc-TZ2E3R619NM/view?usp=sharing) to access the Video Walkthrough.

## Questions

If you have any question or suggestion, please fell free to get in touch with me by:

Email: [luizfroes@gmail.com](mailto:luizfroes@gmail.com)

GitHub: [luizfroes](https://github.com/luizfroes)
