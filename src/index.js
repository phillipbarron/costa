var inquirer = require("inquirer");
const costCalulator = require('./cost-calculator');

const numericValidator = (value) => {
    const valueAsFloat = parseFloat(value);
    return valueAsFloat == NaN ? "please enter a numeric value": true;
  }
inquirer
  .prompt([
    {
      type: "rateOfIncrease",
      name: "rateOfIncrease",
      message: "What's the rate of increase per month?",
      validate: numericValidator
    },
    {
        type: "months",
        name: "months",
        message: "and how many months do you need that for?",
        validate: numericValidator
      },
  ])
  .then(answers => {
    console.log(`that will cost you $${costCalulator.calculateCost(answers.rateOfIncrease, answers.months)}`);
  });
