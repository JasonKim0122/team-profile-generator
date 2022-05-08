const fs = require('fs');

const writeFile = (fileContent => {
    fs.writeFile('./dist/index.html', fileContent, (err) => {
        if (err){
            console.log(err);
        } else {
            console.log('You have successfully generated your team profile!');
        }
    });
});

module.exports = writeFile;