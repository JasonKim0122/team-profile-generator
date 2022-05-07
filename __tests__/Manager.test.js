const Manager = require('../lib/Manager');

test('Creating new Manager objects', () => {
    const employee = new Manager('Dave', 1, 'dave@test.com', 5);

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
});

test('Testing new methods', () => {
    const employee = new Manager('Dave', 1, 'dave@test.com', 5);

    expect(employee.getName()).toBe('Dave');
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getOfficeNumber()).toBe(employee.officeNumber);
    expect(employee.getRole()).toBe('Manager');
});