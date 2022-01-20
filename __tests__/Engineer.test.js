const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {

    const engineer = new Engineer("Jon Snow", "1", "jonsnow@aim.com", "winterfell123", "https://github.com/winterfell123" )

    expect(engineer).toEqual(expect.any(Object))

});

test('get github username', () => {

    const engineer = new Engineer("Jon Snow", "1", "jonsnow@aim.com", "winterfell123", "https://github.com/winterfell123" )

    expect(engineer.getGithub()).toEqual("winterfell123")

});

test('get github link', () => {
    
    const engineer = new Engineer("Jon Snow", "1", "jonsnow@aim.com", "winterfell123", "https://github.com/winterfell123" )

    expect(engineer.getGithubLink()).toEqual("https://github.com/winterfell123")

})

test('get engineer role', () => {

    const engineer = new Engineer("Jon Snow", "1", "jonsnow@aim.com", "winterfell123", "https://github.com/winterfell123" )

    expect(engineer.getRole()).toEqual("Engineer")
})