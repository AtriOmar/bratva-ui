import chalk from "chalk";

export default {
  info: (message) => console.log(chalk.blue("[INFO]"), message),
  warn: (message) => console.log(chalk.yellow("[WARN]"), message),
  error: (message) => console.log(chalk.red("[ERROR]"), chalk.red(message)),
  success: (message) => console.log(chalk.green("[SUCCESS]"), message),
};
