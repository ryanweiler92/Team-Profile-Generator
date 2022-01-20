const Employee = require('../lib/Employee');

test('creates an employee object', () => {

    const employee = new Employee("Jon Snow", "1", "jonsnow@aim.com");

    expect(employee).toEqual(expect.any(Object))

});

test('get employee name', () => {

    const employee = new Employee("Jon Snow", "1", "jonsnow@aim.com")

    expect(employee.getName()).toEqual("Jon Snow")
});

test('get employee id', () => {

    const employee = new Employee("Jon Snow", "1", "jonsnow@aim.com")

    expect(employee.getId()).toEqual("1")

});

test('get employee email address', () => {

    const employee = new Employee("Jon Snow", "1", "jonsnow@aim.com")

    expect(employee.getEmail()).toEqual("jonsnow@aim.com")
});

test('get employee role', () => {
    
    const employee = new Employee("Jon Snow", "1", "jonsnow@aim.com")

    expect(employee.getRole()).toEqual("employee")
});