
// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  ![GitHub repo size](https://img.shields.io/github/repo-size/${data.github}/${data.repo}?style=flat-square)
  ![GitHub issues](https://img.shields.io/github/issues/${data.github}/${data.repo}?style=flat-square)
  ![Website](https://img.shields.io/website?down_color=lightgrey&down_message=offline&style=flat-square&up_message=online&url=https%3A%2F%2F${data.github}.github.io%2F${data.repo})
  ![GitHub contributors](https://img.shields.io/github/contributors/${data.github}/${data.repo}?style=flat-square)

  ## Description

  ### ${data.description}

  
  ## Table Of Contents
  * [Installation](#instalation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Installation
  ### ${data.installation}
  
  ## Usage
  ### ${data.usage}
  ![screenshot](/assets/screenshot.png)

  ## License
  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Contributing
  ### If you would like to contribute, read over the contributor covenant located below. Send further questions to ${data.email}.
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

  ## Tests

  ## Questions
  ### If you have any questions about the generator, visit https://github.com/${data.github}/read-me-generator to create a new issue. You can also contact me at ${data.email} for any additional questions.
  `
}

module.exports = generateMarkdown;
