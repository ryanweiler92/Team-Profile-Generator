const Manager = require("../lib/Manager");

test('creates a manager object', () => {

    const manager = new Manager("Jon Snow", "1", "jonsnow@aim.com", "1055")

    expect(manager).toEqual(expect.any(Object))

});

test('get office number', () => {

    const manager = new Manager("Jon Snow", "1", "jonsnow@aim.com", "1055")

    expect(manager.getOfficeNumber()).toEqual("1055");
})

test('get manager role', () => {

    const manager = new Manager("Jon Snow", "1", "jonsnow@aim.com", "1055")

    expect(manager.getRole()).toEqual("Manager")
})