export function mostPopularMake(cars) {
    if (cars.length === 0) return undefined; 
  
    const makeCount = {};
    cars.forEach(car => {
      makeCount[car.make] = (makeCount[car.make] || 0) + 1;
    });
  
    return Object.keys(makeCount).reduce((a, b) => makeCount[a] > makeCount[b] ? a : b);
  }
  