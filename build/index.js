const fs = require(`fs`);
const cwd = require(`cwd`);
const j2y = require(`json2yaml`);
const chalk = require(`chalk`);

const dcObj = require(cwd(`docker-compose.json`));
const dcYaml = cwd(`docker-compose.yml`);
const yaml = j2y.stringify(dcObj);

fs.writeFileSync(dcYaml, yaml);

console.log(chalk.yellow(yaml)); // eslint-disable-line

console.log(chalk.green(`Successfully wrote docker-compose.yml`)); // eslint-disable-line
