const Intern = require("../lib/Intern");

test('creates an intern object', () => {

    const intern = new Intern("Jon Snow", "1", "jonsnow@aim.com", "Winterfell")

    expect(intern).toEqual(expect.any(Object))

});

test('get school name', () => {

    const intern = new Intern("Jon Snow", "1", "jonsnow@aim.com", "Winterfell")

    expect(intern.getSchool()).toEqual("Winterfell")
})

test('get intern role', () => {

    const intern = new Intern("Jon Snow", "1", "jonsnow@aim.com", "Winterfell")

    expect(intern.getRole()).toEqual("Intern")
})


