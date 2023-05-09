
//import this file into index.js

// generate readme in another folder

// make sue you 're in the project folder not the app folder


# <Your-Project-Title>

## Description




## Table of Contents (Optional)



- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Installation



## Usage

## Credits

## License

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;


