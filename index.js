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
        name: "installation",
        message: "Write installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "What is repo used for?"
    },
    {
        type: "input",
        name: "contribution",
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
    
    
  `;
  }
  