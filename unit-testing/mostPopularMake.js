function mostPopularMake(carList) {
    if (!Array.isArray(carList)) {
        throw new Error("Input must be an array");
    }

    const makeCounts = carList.reduce((acc, car) => {
        acc[car.make] = (acc[car.make] || 0) + 1;
        return acc;
    }, {});

    let mostPopular = null;
    let maxCount = 0;

    for (const make in makeCounts) {
        if (makeCounts[make] > maxCount) {
            mostPopular = make;
            maxCount = makeCounts[make];
        }
    }

    return mostPopular;
}

export default mostPopularMake;
