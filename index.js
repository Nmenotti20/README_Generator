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
        name: "",
        message: "?"
},
{
    type: "input",
        name: "",
        message: "?"
},
{
    type: "input",
        name: "",
        message: "?"
},
{
    type: "input",
        name: "",
        message: "?"
},

];

// function to write README file
function writeToFile('./README.md', data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
