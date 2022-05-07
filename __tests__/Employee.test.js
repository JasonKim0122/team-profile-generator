const Employee = require('../lib/Employee');

test('creates a new employee object', () => {
    const employee = new Employee('Dave', 1, 'dave@test.com', 'Engineer');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
});

test('Checking the methods of the class', () => {
    const employee = new Employee ('Dave', 1, 'dave@test.com', 'Engineer');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe(employee.role);
});