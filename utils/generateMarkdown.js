
//import this file into index.js

// generate readme in another folder

// make sue you 're in the project folder not the app folder




// function to generate markdown for README
function generateMarkdown(data) {
  return `# 
  
  # Title
  ${data.Title}

  ## Description

  ${data.Description}
  
     
  ## Installation
  
  ${data.Intallation}
  
  ## Usage
  
  ${data.Useage}

  ## License
  
  ${data.License}


## Contributions

${data.Contributors}

  ## Tests
  ${data.Tests}



  ##Questions
  ${data.GitHub}
  ${data.Email}
`;
}

module.exports = generateMarkdown;


