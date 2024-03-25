#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondtNumber" },
  {
    message: "select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "subtraction", "Multiplication", "Division"],
  },
]);
// conditional statement
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondtNumber);
} else if (answer.operator === "subtraction") {
  console.log(answer.firstNumber - answer.secondtNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondtNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondtNumber);
} else {
  console.log("please select valid operstor");
}
