import inquirer from 'inquirer';

function generateNum(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let getNum = generateNum(1, 100);

let ques = await inquirer.prompt([


    {
        name: "askNum",
        type:"input",
        message: "Guess which number I have chosen between 1 to 100 ?"
    }
])

if(getNum == ques.askNum)
{
    console.log(`You are RIGHT!!!. I've chosen ${getNum}, and you also chose ${ques.askNum}.`);
}

else{

    console.log(`Your answer is WRONG!!!. I've chosen ${getNum}, and you chose ${ques.askNum}.`);

}
