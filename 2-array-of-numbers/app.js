const args = process.argv.slice(2);
if (args.length === 0) return console.error('No numbers provided.');
if (args.length === 1)
  return console.error(
    'Only one number is provided (A minumum of 2 numbers is required).'
  );
const sum = args.reduce((acc, current) => acc + parseFloat(current), 0);
if (isNaN(sum))
  return console.error(
    "Invalid data received (Value that can't be parsed to Number)."
  );
console.log('Sum is ' + sum);
