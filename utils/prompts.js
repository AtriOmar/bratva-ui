import inquirer from "inquirer";

export default {
  askForTypeScript: async () => {
    const { useTypeScript } = await inquirer.prompt([
      {
        type: "confirm",
        name: "useTypeScript",
        message: "Do you want to use TypeScript?",
        default: false,
      },
    ]);
    return useTypeScript;
  },
};
