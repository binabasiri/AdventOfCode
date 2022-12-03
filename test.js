const { dayOnePartOne } = require('./day1_part1.js');
const { dayOnePartTwo } = require('./day1_part2.js');

const testFunction = async (fn, dataPath, expectedResult) => {
  const result = await fn(dataPath);
  console.log(result);
  return expectedResult === result ? 'PASS' : 'FAIL';
};
const dayOneData = 'data_day_1.txt';
const dayOnePartOneAnswer = 1581;
const dayOnePartTwoAnswer = 1618;

testFunction(dayOnePartOne, dayOneData, dayOnePartOneAnswer).then(
  (testResult) => console.log(testResult)
);
testFunction(dayOnePartTwo, dayOneData, dayOnePartTwoAnswer).then(
  (testResult) => console.log(testResult)
);
