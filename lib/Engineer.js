const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, employeeId, email, githubUsername, githubLink) {
        super(name, employeeId, email);

        this.githubUsername = githubUsername;
        this.githubLink = githubLink
    }

getGithub() {
    return this.githubUsername
}

getGithubLink() {
    return this.githubLink;
}

getRole() {
    return 'Engineer'
}
}




module.exports = Engineer