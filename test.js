const { dayOnePartOne } = require('./day1_part1.js');

const testFunction = async (fn, dataPath, expectedResult) => {
  const result = await fn(dataPath);
  return expectedResult === result ? 'PASS' : 'FAIL';
};
const dayOneData = 'data_day_1.txt';
const dayOnePartOneAnswer = 1581;
testFunction(dayOnePartOne, dayOneData, dayOnePartOneAnswer).then(
  (testResult) => console.log(testResult)
);
