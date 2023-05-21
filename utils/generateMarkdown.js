
//import this file into index.js

// generate readme in another folder

// make sue you 're in the project folder not the app folder


// FUNCTION TO GENERATE MARKDOWN FOR README.md FILE:

function generateMarkdown(data) {
  return `# 
  

# ${data.Title}


![LICENSE](https://img.shields.io/badge/LICENSE-${data.License}-B6A8EF)


## Description

  ${data.Description}

 
## Table of Contents 

[Installation](#installation)

[Usage](#usage)

[Credits](#credits)

[License](#license)
  
     

## Installation
  
  ${data.Intallation}
  

## Usage
  
  ${data.Useage}


## License
  
This application is covered under the ${data.License} license.



## Contributions
  
  ${data.Contributors}

 
## Tests
  
  ${data.Tests}



### Questions

If you'd like to see more of my work, please visit https://github.com/${data.GitHub}

  
If you have any questions please contact: ${data.Email}
`;
}

//Module exports- tell Node.js what to export from a given file, so that other files are allowed to access the exported code

module.exports = generateMarkdown;

