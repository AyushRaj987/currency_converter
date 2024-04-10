#!  /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // base currency
    EUR: 0.91,
    GBP: 0.79,
    INR: 74.57,
    PKR: 280.00,
};
let useranswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    },
]);
let fromCurrency = currency[useranswer.from];
let toAmount = currency[useranswer.to];
let amount = useranswer.amount;
let baseAmount = amount / fromCurrency;
let roundedAmount = Math.round(baseAmount * toAmount * 100) / 100;
console.log(fromCurrency);
console.log(toAmount);
console.log(amount);
console.log(roundedAmount);
