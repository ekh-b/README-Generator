
//TO DO

// See line 63 for future improvements
// Still need to deepen knowledge on the dependencies and how they work- have left my questions in to prompt me when studying




// DEPENDENCIES


const fs = require("fs");
const path = require('path');//requires the path module? 
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");// Will generate the READEME.md file in that folder
const { connected } = require("process");


// //Does table of contents need a section?

// //const userPromt = () =>

// //inquirer.userPrompt ([])


 // ARRAY OF QUESTIONS- when prompted user input is required

const questions = [
    {
        type: 'input',
        message: 'Please enter the title of your project',
        name: 'Title',
    },

    {
        type: 'input',
        message: 'Please provide a description of your project',
        name: 'Description',
    },

    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'Installation',
    },

    {
        type: 'input',
        message: 'What is the purpose of your application?',//Provide instructions and examples for use. Include screenshots as needed.
        name: 'Useage',
    },

    {
        type: 'list',
        message: 'Please enter/select the license you require',
        name: 'License',
        choices:[

        'Apache', //License 2.0,
        'GNU', //General Public License v3.0',         //Right now can only generate these licenses as badges, as the license names don't have spaces
        'MIT',                                          //URLs can't have spaces, due to URL encoding- converts characters into formats that can be transmitted over the internet
        'BSD', //2-Clause "Simplified" License',        // Spaces will be replaced with '%20'
        //'BSD 3-Clause "Simplified" License',
        //'Boost Software License 1.0',                 //FUTURE DEVELOPMENT 
        //'Creative Commons Zero v1.0 Universal',       // Due to time constraints have opted for user to select one word badges
        // 'Eclipse Public License 2.0',                //To allow for a wider option of licesences to be selcted need to create a conditional statement which checks the choice and returns the URL with spaces encoded
        // 'GNU Affero General Public License v3.0',
        // 'GNU General Public License v2.0',
        // 'GNU Lesser General Public License v2.1',
        // 'Mozilla Public License 2.0',
        // 'The Unlicense',
     ]
    },

    {
        type: 'input',
        message: 'Please provide details of any contributors',
        name: 'Contributors',// not sure what this refers too
    },

    {
        type: 'input',
        message: 'What testing is required for this application?',
        name: 'Tests',
    },
    {
        type: 'input',
       message: 'What is your GitHub Username?',
        name: 'GitHub',
    },
    {
        type: 'input',
       message: 'What is your email address?',
        name: 'Email',
    },

   
];


//  FUNCTION TO WRITE READEME.md FILE

function writeToFile(fileName, data) { // do I need to change fileName data to what I want the document to be called?- not changine data otherwise have to change iin other js file 

fs.writeFile(fileName, data ,function (err){  // Have to have all 3 elements in order to use write file function ( function, err and sucess?)
    
    if (err) console.log ("error");

    console.log ("README.md file has been created- to view it, visit the 'GeneratedFile' folder")
});

}

//FUNCTION TO INITIALISE PROGRAMME- prompt here?- need to change q array to a prompt?

function init () {

inquirer.prompt(questions)
.then (function(data){

//fs.- line 99 not needed, maybe only used when creating within the file system?
 writeToFile("./GeneratedFile/README.md",generateMarkdown(data) );


})
///Users/eleashabains/Desktop/Birmingham Bootcamp/Repo/A11/README-Generator/GeneratedFile
///Users/eleashabains/Desktop/Birmingham Bootcamp/Repo/A11/README-Generator/index.js
///Users/eleashabains/Desktop/Birmingham Bootcamp/Repo/A11/README-Generator/utils

}



//{

   
    //.then(function(data){

//fs.writeFile("Test.md"."./utils/generateMarkdown")- write file creates file, writeto writes to the file that has been created?

//fs.writeToFile("./GeneratedFile/test.md",generateMarkdown(data)); // write to folder?

    //}


//}),



//FUNCTION CALL TO INITIALISE PROGRAMME

init();



