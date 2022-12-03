const fs = require('fs').promises;
const dayTwoPartOne = async (dataFilePath) => {
  const data = await fs.readFile(dataFilePath, 'utf8');
  const movements = data.split('\n');
  let horizontalPosition = 0;
  let depth = 0;
  movements.forEach((move) => {
    const direction = move.split(' ')[0];
    const distance = Number(move.split(' ')[1]);
    switch (direction) {
      case 'forward':
        horizontalPosition += distance;
        break;
      case 'down':
        depth += distance;
        break;
      case 'up':
        depth -= distance;
        break;
    }
  });
  return depth * horizontalPosition;
};
module.exports = { dayTwoPartOne };
