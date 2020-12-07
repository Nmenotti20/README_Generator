// function to generate markdown for README
function generateMarkdown(answers) {
  return `

# ${answers.title.toUpperCase()}

[![github-follow](https://img.shields.io/github/followers/${answers.username}?label=Follow&logoColor=purple&style=social)](https://github.com/${answers.username})

[![project-top-language](https://img.shields.io/github/languages/top/${answers.username}/${answers.repositoryName}?color=yellow)](https://github.com/${answers.username}/${answers.repositoryName})

[![license](https://img.shields.io/badge/License-${answers.license}-brightgreen.svg)](https://choosealicense.com/licenses/${answers.license}/)

##### Version ${answers.version}

## Table of Contents 

1. [Project Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Credits](#Credits)
5. [Command to Test](#Test)
6. [License](#License) 

### Project Description

${answers.description}

#### User Story

${answers.userStory}

#### Project Links:

[GitHub Repo for Nmenotti20/README_Generartor](https://github.com/${answers.username}/${answers.repositoryName})<br>

[Video Demo](${answers.videoDemo})<br>

[Additional Links](${answers.addLink})<br>

### Installation

${answers.installation}
  
### Usage

${answers.usage}

### Credits

Special thanks to the following resources that inspired this project:

${answers.credits}

### Command to Test

${answers.test}

### License

This project is [${answers.license}](https://choosealicense.com/licenses/${answers.license}) licensed.<br>

[![license](https://img.shields.io/badge/License-${answers.license}-brightgreen.svg)](https://choosealicense.com/licenses/${answers.license}/)

<hr>
<p align='center'><i>
Copyright © 2020 [${answers.myName}]<br> 

<p align='center'><i>
Please contact me for additional information:<br>
[GitHub Repo]((https://github.com/${answers.username}/${answers.repositoryName})<br>
[Email:](${answers.email})</i></p>

`;
}

module.exports = generateMarkdown;
