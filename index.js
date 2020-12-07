// assets 
const inquirer = require("inquirer");
const until = require('util');

const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    
    // User Full Name
    {
    type: 'input',
        name: 'myName',
		message: 'Enter your first and last name',
	},   

    // User Email
    {
        type: "input",
            name: "email",
            message: "What's your EMAIL address?"
    },
    
   // GitHub username
    {
        type: "input",
            name: "github",
            message: "What's your GITHUB USERNAME?"
    },

    // Github Repository Name
    {
        type: 'input',
            message: 'Enter the name of Github repository for your project.',
            name: 'repositoryName',
    },


    // Title of project
    {
        type: "input",
            name: "title",
            message: "What's the TITLE of your project?"
    },

    // Which version of the Project is this?
    {
        type: "input",
            name: "version",
            message: "Which version of the application is this?"
    },

    // Desciption of project
    {
        type: "input",
            name: "description",
            message: "Please provide a brief DESCRIPTION of your project?"
    },

    // User Story
    {
        type: "input",
            name: "userStory",
            message: "Provide a USER STORY for this application?"
    },
    
    // Project Links
    {
        type: "input",
            name: "videoDemo",
            message: "Provide the relative file path for your Video Demo here: "
    },

    {
        type: "input",
            name: "addLink",
            message: "Provide the relative file path for an additional project link here: "
    },

    // Command to initiate installation
    {
        type: "input",
            name: "installation",
            message: "What is the command to initiate INSTALLATION?"
    },

    // Usage instructions
    {
        type: "input",
            name: "usage",
            message: "Please provide instructions on how to use your app."
    },
    
    // Credits for rescources to user project
    {
        type: "input",
            name: "credit",
            message: "Paste the URL link here to give credit to rescources that went into your project: "
    },

    // Command to initiate test
    {
        type: "input",
            name: "test",
            message: "What is the command to initiate a TEST?"
    },

    // License
    {
        type: "input",
            name: "license",
            message: "Which LICENSE are you using?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },

];
// function to write README file
// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers)=> {
        console.log("This is what you answered...", answers);
        const fs = require('fs');
        fs.writeFile('OUTPUT.md', generateMarkdown(answers), (err) =>
        err ? 
        console.log(err) : console.log ('SUCCESS!!! Your README.md content has been generated to the OUTPUT.md file!')
        )
    })};

// function call to initialize program
init();
