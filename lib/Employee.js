
class Employee {
    constructor(name, employeeId, email) {
        this.name = name
        this.employeeId = employeeId;
        this.email = email;
    }

getName() {
    return this.name
}

getId() {
    return this.employeeId

}

getEmail() {
    return this.email
}

getRole() {
    return 'employee'

}

}

console.log(new Employee('Rob Stark', '1', 'robstark@gmail.com').getEmail())


module.exports = Employee;