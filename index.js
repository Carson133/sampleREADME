// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gituser'
    },

    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title'
    },

    {
        type: 'checkbox',
        message: 'What should be in the Table of Contents?',
        name: 'content',
        choices: ['Description', 'Installation', 'Usage', 'License', 'Tests', 'Links', 'Contributors', 'Questions']
    },

    {
        type: 'input',
        message: 'What is the project description?',
        name: 'description'
    },

    {
        type: 'input',
        message: 'How should users install the application?',
        name: 'installation'
    },

    {
        type: 'input',
        message: 'How is the application used?',
        name: 'usage'
    },

    {
        type: 'list',
        message: 'What license should the project use?',
        name: 'license',
        choices: ['MIT', 'GPL v2', 'GPL v3', 'Apache', 'None']
    },

    {
        type: 'input',
        message: 'What are the testing procedures?',
        name: 'tests'
    },

    {
        type: 'input',
        message: 'What is the deployable link?',
        name: 'links'
    },

    {
        type: 'input',
        message: 'Who are the contributors? (Please list the contributors GitHub usernames separated by commas)',
        name: 'contributors'
    },

    {
        type: 'input',
        message: 'Enter your email address so Users can reach you with questions.',
        name: 'email'
    }
];

// TODO: Create a function to write README file
var writeToFile = (fileName, data) => {
    return generateMarkdown(fileName, data);
}

// TODO: Create a function to initialize app
var init = () => {
    inquirer
        .prompt(questions)
        .then((response) => {
            const fileName = writeToFile(response)
            fs.writeFile('README.md', fileName, (err) => {
                err ? console.error(err) : console.log('Success!')
            })
        })
        .catch((err) => {
            console.log(err);
        })
}

// Function call to initialize app
init();