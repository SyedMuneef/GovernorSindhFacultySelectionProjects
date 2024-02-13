import inquirer from "inquirer";

let bol = true;

while (bol) {
  let operation = await inquirer.prompt([
    {
      name: "opQ",
      type: "list",
      message: "Choose Operation: add, sub, div, mult.",
      choices: ["add", "sub", "div", "mult", "exit"],
    },
  ]);

  if (operation.opQ == "exit") {
    bol = false;
    break;
  } else {
    let numbers = await inquirer.prompt([
      {
        name: "num1",
        type: "number",
        message: "enter first number:",
      },

      {
        name: "num2",
        type: "number",
        message: "enter second number:",
      },
    ]);

    if (operation.opQ == "add") {
      let result = numbers.num1 + numbers.num2;
      console.log("Result:", result);
    } else if (operation.opQ == "sub") {
      let result = numbers.num1 - numbers.num2;
      console.log("Result:", result);
    } else if (operation.opQ == "div") {
      let result = numbers.num1 / numbers.num2;
      console.log("Result:", result);
    } else if (operation.opQ == "mult") {
      let result = numbers.num1 * numbers.num2;
      console.log("Result:", result);
    }
  }
}
