const x = 30;
const y = 12;
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

function calculate(num1, num2, callBack) {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number')
      return reject(new Error('Invalid Input'));
    try {
      return resolve(callBack(num1, num2));
    } catch (e) {
      return reject(e);
    }
  });
}

Promise.all([
  calculate(x, y, add),
  calculate(x, y, multiply),
  calculate(x, y, divide),
  calculate(x, y, subtract),
])
  .then(([result1, result2, result3, result4]) => [
    result1,
    result2,
    result3,
    result4,
  ])
  .then(([result1, result2, result3, result4]) =>
    Promise.all([
      calculate(result1, result2, add),
      calculate(result3, result4, add),
    ]).then(([result1, result2]) =>
      calculate(result1, result2, add).then((finalResult) => finalResult)
    )
  )
  .then((finalResult) => console.log(finalResult));
