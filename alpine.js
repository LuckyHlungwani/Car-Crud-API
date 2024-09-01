// const apiUrl = 'https://bootcamp.projectcodex.co/cars.json';
// let cars = [];

// async function fetchCars() {
//     try {
//         const response = await fetch(apiUrl);
//         cars = await response.json();
//         displayCars(cars);
//     } catch (error) {
//         console.error('Error fetching cars:', error);
//     }
// }

// function displayCars(cars) {
//     const carList = document.getElementById('carList');
//     carList.innerHTML = ''; // Clear the list before displaying new data
//     cars.forEach(car => {
//         const li = document.createElement('li');
//         const colorBox = document.createElement('span');
//         colorBox.className = 'color-box';
//         colorBox.style.backgroundColor = car.color;
//         li.appendChild(colorBox);
//         li.appendChild(document.createTextNode(`${car.make} ${car.model}`));
        
//         const editButton = document.createElement('button');
//         editButton.textContent = 'Edit';
//         editButton.onclick = () => editCar(car.id);
        
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.onclick = () => deleteCar(car.id);
        
//         li.appendChild(editButton);
//         li.appendChild(deleteButton);
//         carList.appendChild(li);
//     });
// }

// function addOrUpdateCar(event) {
//     event.preventDefault();
//     const carId = document.getElementById('carId').value;
//     const make = document.getElementById('make').value;
//     const model = document.getElementById('model').value;
//     const color = document.getElementById('color').value;

//     if (carId) {
//         // Update existing car
//         const carIndex = cars.findIndex(car => car.id == carId);
//         if (carIndex !== -1) {
//             cars[carIndex] = { ...cars[carIndex], make, model, color };
//         }
//     } else {
//         // Add new car
//         const newCar = { 
//             id: Date.now(),
//             make, 
//             model, 
//             color
//         };
//         cars.push(newCar);
//     }

//     displayCars(cars);
//     resetForm();
// }

// function editCar(id) {
//     const car = cars.find(car => car.id == id);
//     if (car) {
//         document.getElementById('carId').value = car.id;
//         document.getElementById('make').value = car.make;
//         document.getElementById('model').value = car.model;
//         document.getElementById('color').value = car.color;
//         document.getElementById('submitBtn').textContent = 'Update Car';
//     }
// }

// function deleteCar(id) {
//     cars = cars.filter(car => car.id != id);
//     displayCars(cars);
//     showMostPopularMake(); // Update the most popular make
// }

// function resetForm() {
//     document.getElementById('carForm').reset();
//     document.getElementById('carId').value = '';
//     document.getElementById('submitBtn').textContent = 'Add Car';
// }

// function showMostPopularMake() {
//     if (cars.length === 0) {
//         return;
//     }
//     const makeCounts = cars.reduce((acc, car) => {
//         acc[car.make] = (acc[car.make] || 0) + 1;
//         return acc;
//     }, {});

//     const mostPopularMake = Object.entries(makeCounts).reduce((a, b) => a[1] > b[1] ? a : b)[0];
//     const count = makeCounts[mostPopularMake];

//     const mostPopularMakeElement = document.getElementById('mostPopularMake');
//     mostPopularMakeElement.textContent = `Most Popular Make: ${mostPopularMake} (${count} cars)`;
// }

// document.getElementById('carForm').addEventListener('submit', addOrUpdateCar);
// document.getElementById('viewMostPopularBtn').addEventListener('click', showMostPopularMake);

// // Fetch cars and show most popular make on page load
// fetchCars();
