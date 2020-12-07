// function to generate markdown for README
function generateMarkdown(answers) {
  return `

![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)

# ${answers.title.toUpperCase()}

[![github-followers](https://img.shields.io/github/followers/${answers.username
  
  .toLowerCase()}?label=Follow&logoColor=yellow&style=social)](https://github.com/${answers.github.toLowerCase()})
[![project-languages-used](https://img.shields.io/github/languages/count/${answers.github.toLowerCase()}/${answers.repositoryName}?color=important)](https://github.com/${answers.github.toLowerCase()}/${answers.repositoryName})
[![project-top-language](https://img.shields.io/github/languages/top/${answers.github.toLowerCase()}/${answers.repositoryName}?color=blueviolet)](https://github.com/${answers.github.toLowerCase()}/${answers.repositoryName})
[![license](https://img.shields.io/badge/License-${answers.license
  .toUpperCase()
  .split('-')
  .join('v')}-brightgreen.svg)](https://choosealicense.com/licenses/${answers.license}/)

####Version 
  
${answers.version}

## Table of Contents 

* [Project Description](#Description)
* [Installation](#Installation)
* [Command to Test](#Test)
* [Usage](#Usage)
* [Credits](#Credits)
* [License](#License) 

### Project Description 
  
${answers.description}

#### User Story 
  
${answers.userStory}

#### Project Links:

*INSERT PROJECT LINKS HERE*

#### Sample Images

*INSERT SAMPLE IMAGES OF YOUR PROJECT HERE*
  
### Installation 
  
${answers.installation}
  
### Command to Test 
  
${answers.test}

### Usage

${answers.usage}

### Credits
 
${answers.credits}

### License
  
${answers.license}

\n* [License](#license)\n


<hr>
<p align='center'><i>
Please contact me for addtional information:


  GitHub User Name: ${answers.github}
  [GitHub Repo:](https://github.com/Nmenotti20/README_Generator.git)
  Email: ${answers.email}
  </i></p>

`;
}

module.exports = generateMarkdown;
