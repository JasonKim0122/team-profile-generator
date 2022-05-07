const {Intern} = require ('../lib/Intern');

test('Testing to see if we create a new intern', () => {
    const employee = new Intern ('Dave', 1, 'dave@test.com', 'UNT');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
});

test('Checking to see if methods work', () => {
    const employee = new Intern ('Dave', 1, 'dave@test.com', 'UNT');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getRole()).toBe('Intern');
});