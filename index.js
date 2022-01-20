const inquirer = require('inquirer');


const managerPrompt = employeeData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'teamManagerName',
            message: 'Please enter the team manager name. (Required)',
            validate: teamManagerNameInput => {
                if (teamManagerNameInput) {
                    return true
                } else {
                    console.log('Please enter the team manager name.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'teamManagerId',
            message: 'Please enter the team manager employee ID. (Required)',
            validate: teamManagerIdInput => {
                if (teamManagerIdInput) {
                    return true
                } else {
                    console.log('Please enter the team manager employee ID.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'teamManagerEmail',
            message: 'Please enter the team manager email address. (Required)',
            validate: teamManagerEmailInput => {
                if (teamManagerEmailInput) {
                    return true
                } else {
                    console.log('Please enter the team manager email address.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'teamManagerOffice',
            message: 'Please enter the team manager office number. (Required)',
            validate: teamManagerOfficeInput => {
                if (teamManagerOfficeInput) {
                    return true
                } else {
                    console.log('Please enter the team manager office number.')
                    return false;
                }
            }
        }
    ])
    .then(managerData => {
        employeeData.manager.push(managerData);
        console.log(employeeData.manager)
    })
};

const employeeRolePrompt = employeeData => {
    if (!employeeData.employees) {
        employeeData.employees = [];
    }
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Would you like to enter a new engineer or intern? (Required)",
            choices: ['Engineer', 'Intern', 'No']
        }
    ])
    .then(employeeData => {
        console.log(employeeData)
        if (employeeData.role == 'Engineer'){
            return engineerPrompt(employeeData)
        } else if (employeeData.role == 'Intern'){
            return internPrompt == 'Intern'
        } else {
            return
        }
    })

}













managerPrompt()
.then(employeeRolePrompt)
