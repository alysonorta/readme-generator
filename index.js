const inquirer = require('inquirer');
const fs = require ('fs');

const questions = [
    "What is the title of the project?",
    "Project description: ",
    "Installation instructions: ",
    "Usage information: ",
    "Contribution guidelines: ",
    "Testing instructions: "
]

inquirer
.prompt ([
    {
        type: 'input',
        name: 'project title',
        message: 'Project Title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description',
    },
    {
        type: 'input',
        name: 'table',
        message: 'Table of Contents',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Credits',
    },
    {
        type: 'input',
        name: 'License',
        message: 'License',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contributing',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Questions',
    },
])