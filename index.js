
//Installation is require for users to use this readme generator:
//Import and use the native fs module to read and write to the file system
//Install 3rd party module inquirer using npm(node package manager)- used to build command ine apps
//

//install inquirer Each project you'll need to run npm init -y and then npm install --save inquirer@^8.0.0
// app/ filename.md- creates the file in that apps folder
// modules functions



//Set variables- with the modules they require 


const fs = require("fs");
const path = require('path');//requires the path module 
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


//Does table of contents need a section?

//const userPromt = () =>

//inquirer.userPrompt ([])




//array of questions for user

const questions = [
    {
        type: 'Input',
        message: 'Please enter the title of your project',
        name: 'Project title',
    },

    {
        type: 'Input',
        message: 'Please provide a description of your project',
        name: 'Description',
    },

    {
        type: 'Input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },

    {
        type: 'Input',
        message: 'What is the purpose of your application?',//Provide instructions and examples for use. Include screenshots as needed.
        name: 'Useage',
    },


    {
        type: 'Input/Select',
        message: 'Please enter/select the license you require',//need to give optitions- list them?
        name: 'License',
    },


    {
        type: 'Input',
        message: 'please provide details of any contributors',
        name: 'Contributors',// not sure what this refers too
    },


    {
        type: 'Input',
        message: 'What testing is required for this application?',
        name: 'Tests',
    },

    {
        type: 'test',
        message: 'test',
        name: 'Questions',//not sure what message this needs to say
    },



    //{- spare

    // type:'test',
    // message:'test',
    //name:'test',

    //},


];




// function to write README file
function writeToFile(fileName, data) {




    
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


//not sure if I needed to generate the packagejson file or to copy it from the starter code?

