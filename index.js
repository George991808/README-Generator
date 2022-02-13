const inquirer = require("inquirer");
const questions = 
    {
        type: "input",
        name: "repoName",
        message: "What is the name of you Repo?"
    };

function askQuestions() {
    inquirer.prompt(questions).then((responses) => {
        console.log(responses);
      
        
    })
}
askQuestions();