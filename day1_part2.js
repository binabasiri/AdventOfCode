const fs = require('fs').promises;
const dayOnePartTwo = async (dataFilePath) => {
  const data = await fs.readFile(dataFilePath, 'utf8');
  const depths = data.split('\n');
  let numberOfIncreases = 0;
  for (let i = 1; i < depths.length - 1; i++) {
    if (
      Number(depths[i]) + Number(depths[i + 1]) + Number(depths[i + 2]) >
      Number(depths[i - 1]) + Number(depths[i]) + Number(depths[i + 1])
    ) {
      numberOfIncreases++;
    }
  }
  return numberOfIncreases;
};
module.exports = { dayOnePartTwo };
