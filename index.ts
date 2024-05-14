#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

async function main() {
    // Collect username
    let name = await inquirer.prompt({
        name: "username",
        type: "input",
        message: chalk.bold.green("\nEnter your name"),
    });

    console.log(chalk.bold.magenta(`\n${chalk.bold.green(name.username)} answer the following quiz:`));

    let score = 0;

    // Question 1
    let quiz1 = await inquirer.prompt([{
        name: "q1",
        type: "list",
        message: chalk.bold.green("\nQ1. What is the capital of Pakistan?"),
        choices: [
            "A, Karachi",
            "B, Islamabad",
            "C, Lahore",
            "D, Quetta"
        ],
    }]);

    if (quiz1.q1 === "B, Islamabad") {
        console.log(chalk.bold.green("\nQno_1: Correct Answer"));
        score++;
    } else {
        console.log(chalk.bold.red("\nIncorrect Answer"));
        console.log("\nCorrect Answer is 'B, Islamabad'.");
    }

    // Question 2
    let quiz2 = await inquirer.prompt([{
        name: "q2",
        type: "list",
        message: chalk.bold.green("\nQ2. Which animal is known as the 'Ship of the Desert'?"),
        choices: [
            "A, Cat",
            "B, Giraffe",
            "C, Elephant",
            "D, Camel"
        ],
    }]);

    if (quiz2.q2 === "D, Camel") {
        console.log(chalk.bold.green("\nQno_2: Correct Answer"));
        score++;
    } else {
        console.log(chalk.bold.red("\nIncorrect Answer"));
        console.log("\nCorrect Answer is 'D, Camel'.");
    }

    // Question 3
    let quiz3 = await inquirer.prompt([{
        name: "q3",
        type: "list",
        message: chalk.bold.green("\nQ3. What is the name of the largest planet of our Solar System?"),
        choices: [
            "A, Jupiter",
            "B, Mars",
            "C, Earth",
            "D, Saturn"
        ],
    }]);

    if (quiz3.q3 === "A, Jupiter") {
        console.log(chalk.bold.green("\nQno_3: Correct Answer"));
        score++;
    } else {
        console.log(chalk.bold.red("\nIncorrect Answer"));
        console.log("\nCorrect Answer is 'A, Jupiter'.");
    }

    // Question 4
    let quiz4 = await inquirer.prompt([{
        name: "q4",
        type: "list",
        message: chalk.bold.green("\nQ4. What is the tallest mountain in the world?"),
        choices: [
            "A, K2",
            "B, Mount Everest",
            "C, Mount Kilimanjaro",
            "D, Denali"
        ],
    }]);

    if (quiz4.q4 === "B, Mount Everest") {
        console.log(chalk.bold.green("\nQno_4: Correct Answer"));
        score++;
    } else {
        console.log(chalk.bold.red("\nIncorrect Answer"));
        console.log("\nCorrect Answer is 'B, Mount Everest'.");
    }

    // Question 5
    let quiz5 = await inquirer.prompt([{
        name: "q5",
        type: "list",
        message: chalk.bold.green("\nQ5. Who invented the lightbulb?"),
        choices: [
            "A, Albert Einstein",
            "B, Nikola Tesla",
            "C, Thomas Edison",
            "D, Alexander Graham Bell"
        ],
    }]);

    if (quiz5.q5 === "C, Thomas Edison") {
        console.log(chalk.bold.green("\nQno_5: Correct Answer"));
        score++;
    } else {
        console.log(chalk.bold.red("\nIncorrect Answer"));
        console.log("\nCorrect Answer is 'C, Thomas Edison'.");
    }

    // Display final score
    if (score < 5) {
        console.log(chalk.bold.red(`\nYour Score is ${score}/5\n\nYou Failed the Quiz!`));
    } else {
        console.log(chalk.bold.magenta(`\nCongratulations! ${chalk.bold.green(name.username)} Your score is ${score}`));
    }
}

main();
