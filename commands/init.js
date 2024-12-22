import fs from "fs";
import path from "path";
import logger from "../utils/logger.js";
import detectFramework from "../utils/detectFramework.js";
import prompts from "../utils/prompts.js";

export default async function initCommand() {
  console.log("Initializing Bratva UI...\n");

  const framework = detectFramework();

  if (!framework) {
    logger.error("Could not detect the framework you are using OR the framework is not supported by Bratva UI.");
    // logger.error("OR the framework is not supported by Bratva UI.");
    process.exit(1);
  }

  logger.info(`Detected framework: ${framework}`);

  // Check whether the bratvaui.config.json file already exists
  const configPath = path.join(process.cwd(), "bratvaui.config.json");
  if (fs.existsSync(configPath)) {
    logger.error("A bratvaui.config.json file already exists.");
    process.exit(1);
  }

  const useTypeScript = await prompts.askForTypeScript();

  logger.info(`TypeScript preference: ${useTypeScript ? "Enabled" : "Disabled"}`);

  const configContent = `{
  "framework": "${framework}",
  "useTypeScript": ${useTypeScript},
  "components": {}
}
`;

  fs.writeFileSync(configPath, configContent, "utf-8");
  logger.success("bratvaui.config.js has been created successfully!");
}
