// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var renderLicenseBadge = (license) => {
  let renderBadge = '';
  switch (license) {
    case 'MIT':
    renderBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    break;

    case 'GPL v2':
    renderBadge = '![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)'
    break;

    case 'GPL v3':
    renderBadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    break;

    case 'Apache':
    renderBadge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
    break;

    case 'None':
    renderBadge = ''
    break;

}
return renderBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
var renderLicenseLink = (license) => {
  let licenseLink = '';
  switch (license) {
    case 'MIT':
    licenseLink = '![License: MIT](https://www.mit.edu/~amini/LICENSE.md)'
    break;

    case 'GPL v2':
      licenseLink = '![License: GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
    break;

    case 'GPL v3':
      licenseLink = '![License: GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html)'
    break;

    case 'Apache':
      licenseLink = '![License: Apache](https://www.apache.org/licenses/LICENSE-2.0)'
    break;

    case 'None':
      licenseLink = ''
    break;

}
return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
var renderLicenseSection = (license) => {
  let licenseBadgeReturn = renderLicenseBadge(license)
  let licenseLinkReturn = renderLicenseLink(license)
  let licenseReturn = `
  ## License
  ${licenseBadgeReturn}
  The project is licensed under the ${license} license.
  ${licenseLinkReturn}
  `
  return licenseReturn;
}

var tableContentsRender = (contents) => {
  let tclinks = []
    for(var i = 0; i < contents.length; i++){
      switch (contents[i]) {
        case 'Description':
                tclinks.push(`\n * [Description](#description)`)
                break;

        case 'Installation':
                tclinks.push(`\n * [Installation](#installation)`)
                break;

        case 'Usage':
                tclinks.push(`\n * [Usage](#usage)`)
                break;

        case 'License':
                tclinks.push(`\n * [License](#license)`)
                break;

        case 'Tests':
                tclinks.push(`\n * [Tests](#tests)`)
                break;

        case 'Links':
                tclinks.push(`\n * [Links](#links)`)
                break;

        case 'Contributors':
                tclinks.push(`\n * [Contributors](#contributors)`)
                break;

        case 'Questions':
                tclinks.push(`\n * [Questions](#questions)`)
                break;
      }
    }
    return tclinks.join('')
}

// TODO: Create a function to generate markdown for README
var generateMarkdown = (data) => {
  return `# ${data.title}

  ## Table of Contents
  ${tableContentsRender(data.content)}

  ## Description
  ${data.description}

  ## Installation
  To install the required dependencies, run the following command:
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Tests
  Please run the following command to test:
  ${data.tests}

  ## Links
  ${data.links}

  ## Contributors
  ${data.contributors}

  ## Questions?
  Please email ${data.email} with any questions.
  Visit me on GitHub at https://github.com/${data.gituser}
  `;
}

module.exports = generateMarkdown;
