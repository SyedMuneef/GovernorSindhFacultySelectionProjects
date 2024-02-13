//This will perfomr atm operations on dataFunc
import inquirer from "inquirer";
import dataFunc from "./dataFunc.js";
let uData = dataFunc();
export const atmMach = async () => {
    const fResponse = await inquirer.prompt([
        {
            name: "askPin",
            type: "input",
            message: "Enter Your pin",
        },
    ]);
    const isUser = uData.find((val) => val.pin == fResponse.askPin);
    if (isUser) {
        console.log(`Hello ${isUser.name}`);
        const atmOperation = await inquirer.prompt([
            {
                name: "chosAtmOps",
                type: "list",
                message: "chose Opertation",
                choices: ["Withdraw", "Check Balance", "Exit"],
            },
        ]);
        if (atmOperation.chosAtmOps == "Check Balance") {
            console.log(`Your Balance is ${isUser.blance}`);
        }
        if (atmOperation.chosAtmOps == "Withdraw") {
            const withAmount = await inquirer.prompt([{
                    name: "checkAmount",
                    type: "input",
                    message: "Enter Amount to Withdraw"
                }]);
            if (withAmount.checkAmount > isUser.blance) {
                console.log(`Insufficient Balance, Your Balance is ${isUser.blance}`);
            }
            else {
                console.log(`Withdraw Sucessfull, your new Balance is ${isUser.blance - withAmount.checkAmount}`);
            }
        }
        if (atmOperation.chosAtmOps == "Check Balance") {
        }
    }
    else {
        console.log(`Invalid pin`);
    }
};
export default atmMach;
