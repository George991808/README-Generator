const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        name: "repoName",
        message: "What is the name of your Repo?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your Repo?"
    },
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {

        type: "list",
        name: "license",
        message: "What is your license?",
        choices: ["Apache", "GNU", "MIT", "No License"]
    },
    {
        type: "input",
        name: "install",
        message: "Write installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "What is repo used for?"
    },
    {
        type: "input",
        name: "contributers",
        message: "Who contributed to the project?"
    },
    {
        type: "input",
        name: "Tests",
        message: "List testing procedure"
    }

]
function askQuestions() {
    inquirer.prompt(questions).then((responses) => {
        console.log(responses);
      
        fs.writeFile('./Readme output/README.md', generateText(responses), (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    })
}
askQuestions();

function generateText(data) {
    return `
# ${data.repoName}
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
## Description
${data.description} 
## TableOfContents
* [Installation](#installation)
* [Contributers](#contributers)
* [Usage](#usage)
* [Tests](#tests)
* [Email](#email)
* [Github](#github)
* [License](#license)
* [Questions](#questions)
## Installation
${data.install}
## Usage
${data.usage}
## Contributers
${data.contributers}
## Tests
${data.tests}
## Questions
Any questions please contact me @ ${data.email}
## Email
${data.email}
## Github
${data.userName}
## License
${data.license}    
  `;
  }
  