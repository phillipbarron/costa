var inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "cost",
      name: "cost",
      message: "What's the cost per month?"
    },
    {
        type: "months",
        name: "months",
        message: "how many months do you need that for?"
      },
  ])
  .then(answers => {
    console.log('answers', JSON.stringify(answers, null, 2));
  });
