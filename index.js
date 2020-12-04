// assets 
const inquirer = require("inquirer");
const until = require('util');

const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    // GitHub username
{
    type: "input",
        name: "github",
        message: "What's your GITHUB USERNAME?"
},

    // Email
{
    type: "input",
        name: "email",
        message: "What's your EMAIL address?"
},

    // Title of project
{
    type: "input",
        name: "title",
        message: "What's the TITLE of your project?"
},

    // Desciption of project
{
    type: "input",
        name: "description",
        message: "Please provide a brief DESCRIPTION of your project?"
},

    // License
{
    type: "input",
        name: "license",
        message: "Which LICENSE are you using?"
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
},

    // Command to initiate installation
{
    type: "input",
        name: "installation",
        message: "What is the command to initiate INSTALLATION?"
},

    // Command to initiate test
{
    type: "input",
        name: "test",
        message: "What is the command to initiate a TEST?"
},

    // Instructions 
{
    type: "input",
        name: "usage",
        message: "Please provide instructions on how to use your project."
},

    // How to contribute
{
    type: "input",
        name: "contributor",
        message: "Tell other developers how they can contribute to this project."
},

    // User Story
{
    type: "input",
        name: "userStory",
        message: "Provide a USER STORY for this application?"
},

    // Which version
{
    type: "input",
        name: "version",
        message: "Which version of the application is this?"
},
];

// function to write README file
// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers)=> {
        console.log("This is what you answered...", answers);
        const fs = require('fs');
        fs.appendFile('README.md', generateMarkdown(answers), (err) =>
        err ? 
        console.log(err) : console.log ('Your README.md content has been generated!')
        )
    })};

// function call to initialize program
init();
