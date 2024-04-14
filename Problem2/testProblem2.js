// testProblem2.js
const findLastCar = require('./problem2');
const inventory = require('../inventory');

const lastCar = findLastCar(inventory);
console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`);
