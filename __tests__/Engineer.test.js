const Engineer = require('../lib/Engineer');

test('Test to see if we created a new Engineer', () => {
    const employee = new Engineer ('Dave', 1, 'dave@test.com', 'Engineer');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
});

test('Checking to see the methods for the Engineer class', () => {
    const employee = new Engineer ('Dave', 1, 'dave@test.com', 'dave@github.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getGitHub()).toBe(employee.github);
    expect(employee.getRole()).toBe('Engineer');
})