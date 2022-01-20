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
            name: 'email',
            message: 'Please enter the employee email address. (Required)',
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
            choices: ['Engineer', 'Intern']
        }
    ])
    .then((answers) => {
        console.log(answers)
        new Employee(answers.name, answers.employeeId, answers.email);
        if(answers.role == 'Engineer'){
            engineerPrompt()
        } else {
            internPrompt()
        }
    })
};

const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Please enter the engineer GitHub username. (Required)',
            validate: githubUsernameInput => {
                if (githubUsernameInput) {
                    return true
                } else {
                    console.log('No GitHub username was entered.')
                    return false;
                }
            }
        },
        {
            
        }
    ])
}



employeePrompt()

