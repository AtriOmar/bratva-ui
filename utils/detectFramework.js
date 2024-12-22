import fs from "fs";
import path from "path";

export default function detectFramework() {
  const packageJsonPath = path.join(process.cwd(), "package.json");
  if (!fs.existsSync(packageJsonPath)) {
    console.error("Could not find package.json in the current directory.");
    process.exit(1);
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
  const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };

  if (dependencies.next) return "Next.js";
  if (dependencies.gatsby) return "Gatsby";
  if (dependencies.react) return "React";
  if (dependencies.vue) return "Vue.js";
  if (dependencies.angular) return "Angular";

  return "Unknown";

  return null;
}
