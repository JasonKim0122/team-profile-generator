//Will be creating templates for each employee

//Manager template

const manager = managerInput => {
    return `
    <div id="${managerInput.getRole()}" class="card">
        <div class="manager-name">
        <h2> ${managerInput.getRole()} </h2>
        <h3> ${managerInput.getName()}</h3>
        </div>
        <div class="card employees-information">
            <div class="id"> ID: ${managerInput.getId()}</div>
            <div class="email"> Email:<a href="mailto:${managerInput.getEmail()}">${managerInput.getEmail()}</a></div>
            <div class="office-number"> Office Number: ${managerInput.getOfficeNumber()}</div>
        </div>
    </div>
    `
}

const engineer = engineerInput => {
    return `
    <div id="${engineerInput.getRole()}" class="card">
        <div class="engineer-name">
        <h2> ${engineerInput.getRole()} </h2>
        <h3> ${engineerInput.getName()}</h3>
        </div>
        <div class="card employees-information">
            <div class="id"> ID: ${engineerInput.getId()}</div>
            <div class="email"> Email:<a href="mailto:${engineerInput.getEmail()}">${engineerInput.getEmail()}</a></div>
            <div class="github"><a href="https://github.com/${engineerInput.getGitHub()}"> github.com/${engineerInput.getGitHub()}</a></div>
        </div>
    </div>
    `
}

const intern = internInput => {
    return `
    <div id="${internInput.getRole()}" class="card">
        <div class="intern-name">
        <h2> ${internInput.getRole()} </h2>
        <h3> ${internInput.getName()}</h3>
        </div>
        <div class="card employees-information">
            <div class="id"> ID: ${internInput.getId()}</div>
            <div class="email"> Email:<a href="mailto:${internInput.getEmail()}">${internInput.getEmail()}</a></div>
            <div class="university"> University: ${internInput.getSchool()}</div>
        </div>
    </div>
    `
}

const employees = employeesArray => {
    let employeePage = ''

    for (i = 0; i < employeesArray.length; i++) {
        if (employeesArray[i].getRole() === 'Manager') {
            employeePage = employeePage + manager(employeesArray[i])
        }
        if (employeesArray[i].getRole() === 'Engineer') {
            employeePage = employeePage + engineer(employeesArray[i])
        }
        if (employeesArray[i].getRole() === 'Intern') {
            employeePage = employeePage + intern(employeesArray[i])
        }
    } return employeePage
};

const createTemplate = response => {
    return `
    <!DOCTYPE>
    <html>
        <head>
            <title> My Team </title>
            <link rel='stylesheet' href='../dist/style.css'>
        </head>

        <body>
            <header class='container'>
                <div class='flex justify-center team'>
                    <h1> My Team </h1>
                </div>
            </header>
            <main class='main-container'>
            ${employees(response)}
            </main>
        </body>
    </html>
    `
}

module.exports = createTemplate