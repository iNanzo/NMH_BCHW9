// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const genMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        name: "title",
        message: "Project Title: ",
    },
    {
        type: "input",
        name: "github",
        message: "Github username: ",
    },
    {
        type: "input",
        name: "email",
        message: "Email address: ",
    },
    {
        type: "input",
        name: "description",
        message: "Project Description: ",
    },
    {
        type: "input",
        name: "installation",
        message: "Installation Instructions: ",
    },
    {
        type: "input",
        name: "usage",
        message: "Usage Information: ",
    },
    {
        type: "input",
        name: "contribution",
        message: "Contribution Guidelines: ",
    },
    {
        type: "input",
        name: "tests",
        message: "Test Instructions: ",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a License: ",
        choices: ["Apache 2.0 License", "GNU AGPL v3", "GNU GPL v3", "GNU LGPL v3", "Mozilla Public License 2.0", "The MIT License"],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var genReadme = genMarkdown.generateMarkdown(data);

    fs.writeFile(
        `./dist/${fileName}README.html`,
        `${genReadme}`,
        (err) => err ? console.error(err) : console.log("README Exported to ./dist")
    );
}

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
