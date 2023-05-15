
// //Installation is require for users to use this readme generator:
// //Import and use the native fs module to read and write to the file system
// //Install 3rd party module inquirer using npm(node package manager)- used to build command ine apps
// //use templaate literls to pass the values

// //install inquirer Each project you'll need to run npm init -y and then npm install --save inquirer@^8.0.0
// // app/ filename.md- creates the file in that apps folder
// // modules functions
//node index.js - cammand to run to run 



// DEPENDENCIES


const fs = require("fs");
const path = require('path');//requires the path module? 
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");// Will generate the READEME.md file in that folder


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

        'Apache License 2.0',
        'MIT'

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
    
    if (err) console.log (err);

    console.log ("Sucessful")
});

}

//FUNCTION TO INITIALISE PROGRAMME- prompt here?- need to change q array to a prompt?

function init () {

inquirer.prompt(questions)
.then (function(data){

//fs.- line 99 not needed, maybe only used when creating within the file system?
 writeToFile("test.md",generateMarkdown(data) );


})


}





//{

   
    //.then(function(data){

//fs.writeFile("Test.md"."./utils/generateMarkdown")- write file creates file, writeto writes to the file that has been created?

//fs.writeToFile("./GeneratedFile/test.md",generateMarkdown(data)); // write to folder?

    //}


//}),



//FUNCTION CALL TO INITIALISE PROGRAMME

init();



