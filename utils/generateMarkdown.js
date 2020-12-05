// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  ![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)

  # ${answers.title}
  **Version ${answers.version}**
  
  ## Table of Contents 

  *1. [Project Description](#Description)
  *2. [Installation](#Installation)
  *3. [Usage](#Usage)
  *4. [Credits](#Credits)
  *5. [License](#License) 


  ### Project Description 
  
  ${answers.description}

  
  #### User Story 
  
  ${answers.userStory}
  
  
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






&copy; 



`;
}

module.exports = generateMarkdown;
