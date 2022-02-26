// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input 
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown.js')
const fs = require('fs')
const questions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project');
                    return false;
                }
            }
        },
        {
           type: 'input',
           name: 'description',
           message: 'Enter a description of your project (Required)',
           validate: descriptionInput => {
               if (descriptionInput) {
                   return true;
               } else {
                   console.log('Please enter a description of your project')
                   return false;
               }
           }  
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What languages were used in your project?',
            choices: ['Python', 'Java', 'JavaScript', 'Html', 'CSS', 'C++', 'None of the above']
        },
        {
            typ: 'link',
            name: 'link',
            message: 'What is link to your page?',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter the link to your webpage')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and exmples for use. Include screenshots as needed.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license supports your project?',
            choices: ['MIT','ISC','GPL','APACHE','None']
            
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter tests for your application'
        },
        {
            typ: 'input',
            name: 'repo',
            message: 'What is the name of your Repository? (Required)',
            validate: repoInput => {
                if (repoInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your repository')
                    return false;
                }
            } 
        },
        {
            type: 'link',
            name: 'github',
            message: 'Enter your Github username (Required)',
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log('Please enter your Github username')
                    return false;
                }
            }
        },
        {
            type: 'link',
            name: 'email',
            message: 'Enter your email (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email')
                    return false;
                }
            }
        }
    ])
};

// TODO: Create a function to write README file
const writeFile = data => {
        fs.writeFile('./README.md', data, err => {
            if (err) {
                console.log(err)
                return
            }
            else 
            {
                console.log('README.md Created!')
            }
        })
}

questions()
.then(answers => {
    return generatePage(answers)
})
.then(data => {
    writeFile(data)
})
