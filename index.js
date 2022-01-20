const inquirer = require('inquirer');
const Employee = require('./lib/Employee')

const employeePrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the employee. (Required)',
            validate: employeeNameInput => {
                if (employeeNameInput) {
                    return true
                } else {
                    console.log('No employee name was entered.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the employee ID. (Required)',
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true
                } else {
                    console.log('No employee ID was entered.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the team manager email address. (Required)',
            validate: employeeEmailInput => {
                if (employeeEmailInput) {
                    return true
                } else {
                    console.log('Please enter the employee email address.')
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the role of this employee? (Required)",
            choices: ['Engineer', 'Intern', 'Manager']
        }
    ])
};




employeePrompt()
.then (employeeData => {
    console.log(employeeData)
})
