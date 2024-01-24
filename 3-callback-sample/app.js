const x = 30;
const y = 12;
const add = (err, num1, num2) => {
  if (err) console.error(err);
  return num1 + num2;
};
const subtract = (err, num1, num2) => {
  if (err) console.error(err);
  return num1 - num2;
};
const multiply = (err, num1, num2) => {
  if (err) console.error(err);
  return num1 * num2;
};
const divide = (err, num1, num2) => {
  if (err) console.error(err);
  return num1 / num2;
};

function calculate(num1, num2, callBack) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number')
    return callBack(new Error('Invalid Input'));
  try {
    return callBack(null, num1, num2);
  } catch (e) {
    return callBack(e);
  }
}

const result1 = calculate(x, y, add); // 42
const result2 = calculate(x, y, multiply); // 360
const result3 = calculate(x, y, divide); // 2.5
const result4 = calculate(x, y, subtract); // 18
const finalResult = calculate(
  calculate(result1, result2, add),
  calculate(result3, result4, add),
  add
);
console.log(finalResult);
