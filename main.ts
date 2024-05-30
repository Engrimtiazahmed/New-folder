#! /usr/bin/env node

// Number guessing
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random()*10+1);
console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        message: "Guess a number between 1-10",
        name: "guessNumber",
        type: "number"
    }
]);
if (randomNumber === answer.guessNumber){console.log("\nCongratulations !!! you have guessed correct number and won a prize\n");
}
else{console.log("\nOOOhhh!! Sorry you have guessed rong number please try again\n");
}
