// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const genMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        message: "Project Title: ",
        name: "title",
    },
    {
        type: "input",
        message: "Github username: ",
        name: "github",
    },
    {
        type: "input",
        message: "Email address: ",
        name: "email",
    },
    {
        type: "input",
        message: "Project Description: ",
        name: "description",
    },
    {
        type: "input",
        message: "Installation Instructions: ",
        name: "installation",
    },
    {
        type: "input",
        message: "Usage Information: ",
        name: "usage",
    },
    {
        type: "input",
        message: "Contribution Guidelines: ",
        name: "contributing",
    },
    {
        type: "input",
        message: "Test Instructions: ",
        name: "tests",
    },
    {
        type: "list",
        message: "Choose a License: ",
        name: "license",
        choices: ["Apache 2.0 License", "GNU AGPL v3", "GNU GPL v3", "GNU LGPL v3", "Mozilla Public License 2.0", "The MIT License"],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((input)=>{
            writeToFile(input.title, input)
        })
        .catch((error)=>{
            if(error.isTtyError){
                console.log("Error ", error)
            }else{
                console.log("Unkown Error ", error)
            }
        })
}

// Function call to initialize app
init();