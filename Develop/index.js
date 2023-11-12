// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "title",
    message: "What is your project's name?"
},
{
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
},
{
    type: "input",
    name: "email",
    message: "What is the email you would like to use for questions from users?",
},
{
    type: "input",
    name: "description",
    message: "Describe your project",
},
{
    type: "input",
    name: "link",
    message: "Insert your GitHub url link for users to access your project.",
},
{
    type: "checkbox",
    name: "license",
    message: "Select the license used on your project.",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "none"],
},
{
    type: "input",
    name: "installation",
    message: "Describe how to install this project.",
},
{
    type: "input",
    name: "usage",
    message: "Describe how to use this project.",
},
{
    type: "input",
    name: "contribution",
    message: "Describe how users can contribute to this project.",
},
{
    type: "input",
    name: "test",
    message: "List instructions on how users can test this project.",
},
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
