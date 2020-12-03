// assets 
const inquirer = require("inquirer");
const until = require('util');

const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
{
    type: "input",
        name: "github",
        message: "Enter your GitHub username?"
},
{
    type: "",
        name: "",
        message: "?"
},
{
    type: "",
        name: "",
        message: "?"
},
{
    type: "",
        name: "",
        message: "?"
},
{
    type: "",
        name: "",
        message: "?"
},
{
    type: "",
        name: "",
        message: "?"
},
{
    type: "",
        name: "",
        message: "?"
},
{
    type: "",
        name: "",
        message: "?"
},
{
    type: "",
        name: "",
        message: "?"
},
{
    type: "",
        name: "",
        message: "?"
},
{
    type: "",
        name: "",
        message: "?"
},

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
