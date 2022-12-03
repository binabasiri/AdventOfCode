const { dayOnePartOne } = require('./day1_part1.js');
const { dayOnePartTwo } = require('./day1_part2.js');
const { dayTwoPartOne } = require('./day2_part1.js');
const { dayTwoPartTwo } = require('./day2_part2.js');

const testFunction = async (fn, dataPath, expectedResult) => {
  const result = await fn(dataPath);
  return expectedResult === result ? 'PASS' : 'FAIL';
};
const dayOneData = 'data_day_1.txt';
const dayOnePartOneAnswer = 1581;
const dayOnePartTwoAnswer = 1618;
const dayTwoData = 'data_day_2.txt';
const dayTwoPartOneAnswer = 1654760;
const dayTwoPartTwoAnswer = 1956047400;

testFunction(dayOnePartOne, dayOneData, dayOnePartOneAnswer).then(
  (testResult) => console.log(testResult)
);
testFunction(dayOnePartTwo, dayOneData, dayOnePartTwoAnswer).then(
  (testResult) => console.log(testResult)
);
testFunction(dayTwoPartOne, dayTwoData, dayTwoPartOneAnswer).then(
  (testResult) => console.log(testResult)
);
testFunction(dayTwoPartTwo, dayTwoData, dayTwoPartTwoAnswer).then(
  (testResult) => console.log(testResult)
);
