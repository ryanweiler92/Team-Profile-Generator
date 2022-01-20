const Employee = require('../lib/Employee');

test('creates an employee object', () => {

    const employee = new Employee("Jon Snow", "1", "jonsnow@aim.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.employeeId).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));

}) 

test('get employee name', () => {

    const employee = new Employee("Jon Snow", "1", "jonsnow@aim.com")

    expect(employee.getName()).toEqual("Jon Snow")
})