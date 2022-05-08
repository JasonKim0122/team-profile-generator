const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const createTemplate = require('./src/page-template');
const writeFile = require('./src/writeFile');

const employeesArray = [];


const promptManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name:'name',
            message: "What is the manager's name?(Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'id',
            message:"Please enter your ID #. (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a valid ID #');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'email',
            message: 'Please enter your email address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address! (Required)');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message:'Please enter your office number (Required)',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter a valid office #!');
                    return false;
                }
            }
        }
    ])
};

const promptEmployeeQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'typeOfEmployee',
            message: 'Please select what type of employee you would like to add',
            choices: [
                {name: 'Engineer', value: 'selectEngineer'},
                {name: 'Intern', value: 'selectIntern'},
                {name: 'Done', value: 'done'}
            ]
        }
    ])
    .then( response => {
        if (response.typeOfEmployee === 'selectEngineer') {promptEngineerQuestions (); };
        if (response.typeOfEmployee === 'selectIntern') {promptInternQuestions (); };
        if (response.typeOfEmployee === 'done') { 
            let createHtml = createTemplate(employeesArray)
            writeFile(createHtml);
        }
    })
};

const promptEngineerQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the Engineer's name. (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID # assigned to your engineer. (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a valid ID #!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter their email address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid Email Address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter their GitHub Username. (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter a valid username');
                    return false;
                }
            }
        }
    ])
    .then ((response) => {
        response = new Engineer (response.name, response.id, response.email, response.github)
        employeesArray.push(response);
        return promptEmployeeQuestions();
    })
};

const promptInternQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the Intern. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the ID # assigned to the intern. (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a valid ID #!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address for the intern. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid Email Address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the University of the Intern. (Required)',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter a valid University name!');
                    return false;
                }
            }
        }
    ])
    .then ((response) => {
        response = new Intern (response.name, response.id, response.email, response.school);
        employeesArray.push(response);
        return promptEmployeeQuestions();
    })
};

promptManager()
.then((response) => {
    response = new Manager(response.name, response.id, response.email, response.officeNumber)
    employeesArray.push(response);
    return promptEmployeeQuestions();
});
