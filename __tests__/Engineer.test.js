const {Engineer} = require('../lib/Engineer');

test('Test to see if we created a new Engineer', () => {
    const employee = new Engineer ('Dave', 1, 'dave@test.com', 'Engineer');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
});