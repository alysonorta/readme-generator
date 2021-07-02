const inquirer = require('inquirer');
const fs = require ('fs');

const generateMarkdown = (answers) =>
`# ${answers.title}
## Description
${answers.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Contribution](#contribute)
- [Tests](#tests)
- [Questions](#questions)
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
## Contribute
${answers.contribution}
## Tests
${answers.tests}
## Questions
Please visit my GitHub page at: https://github.com/${answers.github}
Please e-mail me with additional questions at: ${answers.email}
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
        choices: ["Apache", "GNU", "NPM"],
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
        name: 'github',
        message: 'GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'E-mail Address',
    },
])

.then((answers) => {
    const filename = generateMarkdown(answers);

    fs.writeFile('README.md', filename, (err) =>
      err ? console.log(err) : console.log('File Written!')
    );
  });