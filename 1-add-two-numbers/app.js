const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });
rl.question('Enter first number: ', (num1) => {
  rl.question('Enter second number: ', (num2) => {
    console.log(parseInt(num1) + parseInt(num2));
    rl.close();
  });
});
