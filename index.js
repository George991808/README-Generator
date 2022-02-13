const inquirer = require("inquirer");
const fs = require("fs");

const questions = 
    {
        type: "input",
        name: "repoName",
        message: "What is the name of your Repo?"
    };

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
  