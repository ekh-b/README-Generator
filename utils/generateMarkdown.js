
//import this file into index.js

// generate readme in another folder

// make sue you 're in the project folder not the app folder




// function to generate markdown for README
function generateMarkdown(data) {
  return `# 
  
# ${data.Title}

// <License badge, need to make it show up >
![Badge]https://img.shields.io/badge/${data.license}

// https://img.shields.io/badge/dynamic/json?url=<URL>&label=<LABEL>&query=<${data.license}>&color=<COLOR>&prefix=<PREFIX>&suffix=<SUFFIX>
// // ${data.license}


![license](https://img.shields.io/badge/license${data.License})
![license](https://img.shields.io/github/license/${data.License}.svg)

[!License](https://img.shields.io/badge/License/${data.license})

-Apache%202.0-blue.svg)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



![license](https://img.shields.io/badge/license-${data.License}-yellow)

![license](https://img.shields.io/badge/license-${data.License}-red)

seem to only generate when dat.license is lower case?? but not 100% wokring


-> maybe make the options given to the user shorter and do else if- optionsd with licneses?


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



## Questions

If you'd like to see more of my work, please visit https://github.com/${data.GitHub}

  
If you have any questions please contact: ${data.Email}
`;
}

//Module exports is used to store variables or methods?
module.exports = generateMarkdown;

//<!--https://github.com/ekh-b-->
