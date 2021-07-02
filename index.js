const inquirer = require('inquirer');
const fs = require ('fs');

const generateMarkdown = (answers) =>
`# <Your-Project-Title>
${answers.title}
## Description
${answers.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${answers.installation}
## Usage
${answers.usage}
## Credits
${answers.credits}
## License
${answers.license}
## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
## Features
${answers.features}
## How to Contribute
${answers.contribution}
## Tests
${answers.tests}
## Questions
${answers.questions}
`

inquirer
.prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'Project Title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description',
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
        type: 'list',
        choices: ["First Choice", "Second Choice", "Third Choice"],
        name: 'License',
        message: 'License',
    },
    {
        type: 'input',
        name: 'features',
        message: 'Features',
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