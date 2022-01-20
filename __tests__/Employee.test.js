const Employee = require('../lib/Employee');

test('creates an employee object', () => {

    const employee = new Employee('Oberyn Martell');

    expect(employee.name).toBe('Oberyn Martell');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

}) 