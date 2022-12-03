const fs = require('fs').promises;
const dayTwoPartTwo = async (dataFilePath) => {
  const data = await fs.readFile(dataFilePath, 'utf8');
  const movements = data.split('\n');
  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;
  movements.forEach((move) => {
    const direction = move.split(' ')[0];
    const distance = Number(move.split(' ')[1]);
    switch (direction) {
      case 'forward':
        horizontalPosition += distance;
        depth = depth + distance * aim;
        break;
      case 'down':
        aim += distance;
        break;
      case 'up':
        aim -= distance;
        break;
    }
  });
  return depth * horizontalPosition;
};
module.exports = { dayTwoPartTwo };
