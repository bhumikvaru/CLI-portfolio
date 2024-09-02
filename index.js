#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

// Define the content of your portfolio
const asciiArt = `
### ##   ###  ##  ##  ###  ##   ##    ####   ##  ###           ### ###    ##     ### ##   ##  ###  
 ##  ##   ##  ##  ##   ##   ## ##      ##    ##  ##             ##  ##    ###     ##  ##  ##   ##  
 ##  ##   ##  ##  ##   ##  # ### #     ##    ## ##              ##  ##   ## ##    ##  ##  ##   ##  
 ## ##    ######  ##   ##  ## # ##     ##    ## ##              ##  ##   ##  ##   ## ##   ##   ##  
 ##  ##   ##  ##  ##   ##  ##   ##     ##    ## ###             ### ##   ######   ## ##   ##   ##  
 ##  ##   ##  ##  ##   ##  ##   ##     ##    ##  ##              ###     ##  ##   ##  ##  ##   ##  
### ##   ###  ##   ## ##   ##   ##    ####   ##  ###              ##    ###  ##  #### ##   ## ##   
                                                                                                   
`;
const portfolio = `
  💡 ${chalk.bold.green("Bhumik Varu")}
  ${chalk.white("Full Stack Engineer")}

  ${chalk.cyan(asciiArt)}

  🧰 Tech Stack:
  🔧 Full Stack  🟢 Node.js  ⚛️ React.js  🍃 MongoDB  🚂 Express.js

  🔗 Connect:
  ${chalk.blue("🐙 GitHub:")}   https://github.com/bhumikvaru
  ${chalk.blue("🔗 LinkedIn:")} https://linkedin.com/in/bhumik-varu
  ${chalk.blue("📝 Medium:")}   https://medium.com/@bhumikvaru
  ${chalk.blue("🐦 Twitter:")}  https://x.com/bhumik_varu

  ${chalk.yellow(
    "🚀 Bio:"
  )} Passionate about building scalable backend solutions and improving system performance.
`;

// Define the box options
const boxOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
  backgroundColor: "#555555",
};

// Output the portfolio
console.log(boxen(portfolio, boxOptions));
