// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');

// Questions to ask the user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'GPL 3.0', 'Apache 2.0', 'ISC']
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  }
];

// Function to generate README content
function generateReadme(answers) {
  const { title, description, installation, usage, contributing, tests, license, github, email } = answers;
  const licenseBadge = `![License](https://img.shields.io/badge/license-${license}-blue.svg)`; // License badge
  return `
# ${title}
${licenseBadge}

## Description
${description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
This project is licensed under the ${license} License.

## Contributing
${contributing}

## Tests
${tests}

## Questions
If you have any questions, feel free to reach out to me:
- GitHub: [${github}](https://github.com/${github})
- Email: [${email}](mailto:${email})
  `;
}

// Function to initialize the application
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      // Generate the README content
      const readmeContent = generateReadme(answers);
      // Write the content to a README.md file
      fs.writeFileSync('README.md', readmeContent, 'utf8');
      console.log('README.md generated successfully!');
    })
    .catch((error) => {
      console.log('Error during prompt process:', error);
    });
}

// Run the application
init();