
const countCarsOlderThan2000 = require('./problem5');
const inventory = require('../inventory');

const olderCarsCount = countCarsOlderThan2000(inventory);
console.log(`Number of cars older than 2000: ${olderCarsCount}`);
