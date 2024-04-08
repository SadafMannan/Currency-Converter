#!/usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";                                              
 console.log(chalk.yellowBright.bold("\n\t ********Welcome to SADAF Currency Converter******"));
//define the list of currenciesand their exchange rate
let exchangeRate :any = {
    "USD":1,
    "EUR":0.9,
    
    "JPY":113,
    "AUD":1.65,
    "CAD":1.3,
    "PKR":277,
}
let userAnswer = await inquirer.prompt([{
    name:"from_currency",
    type:"list",
    message:"select the currency to convert from:",
    choices:["USD","EUR","JPY","AUD","CAD","PKR"]
},
{
    name:"to_currency",
    type:"list",
    message:"select the currency to convert into:",
    choices:["USD","EUR","JPY","AUD","CAD","PKR"]
},
{
    name:"amount",
    type:"input",
    message:"enter the amount to convert:",
}]);
//perform the conversion by using formula
let from_amount =exchangeRate[userAnswer.from_currency]

let to_amount =exchangeRate[userAnswer.to_currency]

let amount =userAnswer.amount
//formula of the conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount
//display the converted amount
console.log(`Converted Aamount = ${converted_amount.toFixed(2)}`);





