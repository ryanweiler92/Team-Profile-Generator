const inquirer = require('inquirer');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const {writeFile, copyFile} = require('./util/generate-site.js')
const generatePage = require('./src/page-template')

let employees = []

//seperate manager prompt to ensure the user fills out manager information first
const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the team manager. (Required)',
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true
                } else {
                    console.log('No manager name was entered.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
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
            message: 'Please enter the manager email address. (Required)',
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true
                } else {
                    console.log('Please enter the manager email address.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the office number of the team manager. (Required)',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true
                } else {
                    console.log('No manager name was entered.')
                    return false;
                }
            }
        }
    ])
    .then((answers) => {
        employees.push(new Manager(answers.name, answers.managerId, answers.email, answers.officeNumber))
        addEmployeePrompt();
    })
};

//gets info specific to engineer employees
const engineerPrompt = () => {
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
        }
    ])
    .then((answers) => {
        employees.push(new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername))
        addEmployeePrompt();
    })
}

//gets info specific to interns
const internPrompt = () => {
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
            type: 'input',
            name: 'school',
            message: 'Please enter the name of the school the intern attends. (Required)',
            validate: schoolInput => {
                if (schoolInput) {
                    return true
                } else {
                    console.log('No school name was entered.')
                    return false;
                }
            }
        },
    ])
    .then((answers) => {
        employees.push(new Intern(answers.name, answers.managerId, answers.email, answers.school))
        addEmployeePrompt();
    })
}



//asks if user wants to add another employee or if they are done entering employees
const addEmployeePrompt = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
    .then((answers) => {
        if (answers.addEmployee) {
            return employeeRolePrompt();
        } else {
            generatePage(employees);
        }
    })
};

const employeeRolePrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is the role of this employee? (Required)",
            choices: ['Engineer', 'Intern']
        }
    ])
    .then((answers) => {
        if(answers.role == 'Engineer'){
            engineerPrompt()
        } else {
            internPrompt()
        }
    })
};
    
managerPrompt()

