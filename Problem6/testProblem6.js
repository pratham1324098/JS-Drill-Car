const findBMWAndAudiCars = require('./problem6');
const inventory = require('../inventory');

const BMWAndAudi = findBMWAndAudiCars(inventory);
console.log(JSON.stringify(BMWAndAudi, null, 2));
