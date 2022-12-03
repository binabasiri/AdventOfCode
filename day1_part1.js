const fs = require('fs').promises;
const dayOnePartOne = async (dataFilePath) => {
  let numberOfIncreases = 0;
  const data = await fs.readFile(dataFilePath, 'utf8');
  const depths = data.split('\n');
  depths.forEach((depth, i) => {
    if (i != 0 && Number(depth) > Number(depths[i - 1])) {
      numberOfIncreases++;
    }
  });

  return numberOfIncreases;
};
module.exports = { dayOnePartOne };
