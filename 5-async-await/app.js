const x = 30;
const y = 12;
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

async function calculate(num1, num2, callBack) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number')
    return new Error('Invalid Input');
  try {
    return callBack(num1, num2);
  } catch (e) {
    return e;
  }
}

async function main() {
  const result1 = await calculate(x, y, add); // 42
  const result2 = await calculate(x, y, multiply); // 360
  const result3 = await calculate(x, y, divide); // 2.5
  const result4 = await calculate(x, y, subtract); // 18
  const finalResult = await calculate(
    await calculate(result1, result2, add),
    await calculate(result3, result4, add),
    add
  );
  console.log(finalResult);
}
main();
