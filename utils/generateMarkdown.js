
//import this file into index.js

// generate readme in another folder

// make sue you 're in the project folder not the app folder




// function to generate markdown for README
function generateMarkdown(data) {
  return `# 
  
  # ${data.Title}

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
