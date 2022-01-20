const inquirer = require('inquirer');

class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}



const employeePrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
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
            name: 'employeeId',
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
            name: 'employeeEmail',
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



module.exports = Employee;