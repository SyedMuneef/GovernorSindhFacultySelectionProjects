import inquirer from "inquirer";
const calculate = (num1, num2, operation) => {
    switch (operation) {
        case "add":
            return num1 + num2;
        case "sub":
            return num1 - num2;
        case "div":
            return num1 / num2;
        case "mult":
            return num1 * num2;
        default:
            throw new Error("Invalid operation");
    }
};
const main = async () => {
    let keepRunning = true;
    while (keepRunning) {
        const input = await inquirer.prompt([
            {
                name: "opQ",
                type: "list",
                message: "Choose Operation: add, sub, div, mult, exit.",
                choices: ["add", "sub", "div", "mult", "exit"],
            },
            {
                name: "num1",
                type: "number",
                message: "Enter first number:",
            },
            {
                name: "num2",
                type: "number",
                message: "Enter second number:",
            },
        ]);
        if (input.opQ === "exit") {
            keepRunning = false;
        }
        else {
            try {
                const result = calculate(input.num1, input.num2, input.opQ);
                console.log("Result:", result);
            }
            catch (error) {
            }
        }
    }
};
main();
