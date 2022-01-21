const inquirer = require('inquirer');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')

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
        }
    ])
    .then((answers) => {
        console.log(answers);
        new Engineer(answers.githubUsername)
        addEmployeePrompt();
    })
}

const internPrompt = () => {
    return inquirer.prompt([
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
        console.log(answers);
        new Intern(answers.school)
        addEmployeePrompt();
    })
}

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
            return employeePrompt();
        } else {
            return;
        }
    })
};

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
        }
    ])
    .then((answers) => {
        console.log(answers)
        new Employee(answers.name, answers.managerId, answers.email);
        manager2Prompt();
})
};


const manager2Prompt = () => {
    return inquirer.prompt([
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
        new Manager(answers.officeNumber)
        addEmployeePrompt();
    })
}
    
managerPrompt()

