// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache 2.0 License":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

    case "GNU AGPL v3":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)";

    case "GNU GPL v3":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](http://www.gnu.org/licenses/gpl-3.0.html)";

    case "GNU LGPL v3":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0)";

    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

    case "The MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    
    case "Apache 2.0 License":
      return "https://opensource.org/licenses/Apache-2.0";

    case "GNU AGPL v3":
      return "http://www.gnu.org/licenses/agpl-3.0";

    case "GNU GPL v3":
      return "http://www.gnu.org/licenses/gpl-3.0.html";

    case "GNU LGPL v3":
      return "http://www.gnu.org/licenses/lgpl-3.0";

    case "Mozilla Public License 2.0":
      return "https://opensource.org/licenses/MPL-2.0";

    case "The MIT License":
      return "https://opensource.org/licenses/MIT";

    default: return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === ""){
    return "";
  }else{
    return `Licensed under [${license}](${renderLicenseLink(data.license)}).`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var genReadme = `# ${fileName}
  ${renderLicenseBadge.license}
  ${data.description}
  ## Table of Contents
  1. [Features](#features)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Tests](#tests)
  5. [Credits](#credits)
  6. [License](#license)
  7. [How to Contribute](#how_to_contribute)
  ## Features
  ${data.features}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Tests
  ${data.tests}
  ## Credits
  ${data.credits}
  ## License
  ${renderLicenseSection.license}
  ## How to Contribute
  ${data.contribution}
  # End
  `;

  return genReadme;
}

module.exports = { generateMarkdown };