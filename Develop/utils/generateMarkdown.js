
// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  ## Description
  #### ${data.description}
  # screenshot
  ![screenshot](/assets/screenshot.png)

  ## Table Of Contents
  * [Instalation](#instalation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)

  #### Installation

  #### Usage

  #### License
  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

  #### Contributing

  #### Tests

  ## Questions
  #### If you have any questions visit https://github.com/${data.github} to create a new issue. You can also contact me at ${data.email} for any additional questions.
  `
}

module.exports = generateMarkdown;
