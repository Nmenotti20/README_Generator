// assets 
const inquirer = require("inquirer");
const until = require('util');

const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
{
    type: "input",
        name: "github",
        message: "What's your GITHUB USERNAME?"
},
{
    type: "input",
        name: "email",
        message: "What's your EMAIL address?"
},
{
    type: "input",
        name: "title",
        message: "What's the TITLE of your project?"
},
{
    type: "input",
        name: "description",
        message: "Please provide a brief DESCRIPTION of your project?"
},
{
    type: "input",
        name: "license",
        message: "Which LICENSE are you using?"
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
},
{
    type: "input",
        name: "installation",
        message: "What is the commend to initiate INSTALLATION?"
},
{
    type: "input",
        name: "test",
        message: "What is the command to initiate a TEST?"
},
{
    type: "input",
        name: "usage",
        message: "Please provide instructions on how to use your project."
},
{
    type: "input",
        name: "contributor",
        message: "Tell other developers how they can contribute to this project."
},
{
    type: "input",
        name: "userStory",
        message: "Provide a USER STORY for this application?"
},
{
    type: "input",
        name: "version",
        message: "Which version of the application is this?"
},

];

// function to write README file
// function writeToFile('./README.md', input) {
// }

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers)=> {
        console.log("This is what you answered...", answers);
        const fs = require('fs');
        fs.appendFile('README.md', generateMarkdown(answers), (err) =>
        err ? console.log(err) ; console.log ('Your README.md content has been generated!')
        )
    })};

// function call to initialize program
init();
