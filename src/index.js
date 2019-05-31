var inquirer = require("inquirer");
const costCalulator = require('./calculator');

const numericValidator = (value) => {
    const valueAsFloat = parseFloat(value);
    return valueAsFloat == NaN ? "please enter a numeric value": true;
  }
inquirer
  .prompt([
    {
      type: "rateOfIncrease",
      name: "rateOfIncrease",
      message: "What's the rate of increase?",
      validate: numericValidator
    },
    {
        type: "duration",
        name: "duration",
        message: "and for what duration?",
        validate: numericValidator
      },
  ])
  .then(answers => {
    console.log(`Total value: ${costCalulator.calculateCumulativeValue(answers.rateOfIncrease, answers.duration)}\n`);
  });
