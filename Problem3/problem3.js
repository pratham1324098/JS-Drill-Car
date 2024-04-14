function sortCarModelsAlphabetically(inventory) {
    const carModels = [];
    for (let i = 0; i < inventory.length; i++) {
        carModels.push(inventory[i].car_model);
    }


    for (let i = 0; i < carModels.length - 1; i++) {
        for (let j = i + 1; j < carModels.length; j++) {
            if (carModels[i] > carModels[j]) {
                const temp = carModels[i];
                carModels[i] = carModels[j];
                carModels[j] = temp;
            }
        }
    }

    return carModels;
}

module.exports = sortCarModelsAlphabetically;
