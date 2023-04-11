// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge = '';
    if (license === 'MIT') {
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (license === 'Apache 2.0') {
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (license === 'GNU General Public v2.0') {
      badge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    } else if(license === 'none') {
      badge = ''
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license ==='MIT'){
return `(https://opensource.org/licenses/MIT)`
}
else if (license === 'Apache 2.0') {
return  `(https://opensource.org/licenses/Apache-2.0)`
}
else if (license === 'GNU General Public v2.0') {
    return `(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
} 
else if(license === 'none') {
    return ''
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log(data)
  return `# ${data.title}\n
## Table of Contents: 
[Description](#description)\n
[Installation](#installation)\n
[Usage](#usage)\n
[Contributions](#contributions)\n
[License](#license)\n
[Questions](#questions)\n
## Description: \n${data.description}\n
## Installation: \n${data.installation}\n
## Usage: \n${data.usage}\n
## Contributions: \n${data.contributions}\n
## License: \n${renderLicenseBadge(data.license)}\n
${renderLicenseLink(data.license)}\n
## Questions: \nGithub Username: https://github.com/${data.username}\n
\nEmail: ${data.email}\n`;
}

module.exports = generateMarkdown;