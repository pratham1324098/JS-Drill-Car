function countCarsOlderThan2000(inventory) {
    let count = 0;
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].car_year < 2000) {
            count++;
        }
    }
    return count;
}

module.exports = countCarsOlderThan2000;
