// function carApp() {
//     return {
//         cars: [],
//         form: {
//             make: '',
//             model: '',
//             color: '',
//             reg_number: ''
//         },
//         mostPopularMake: '',
//         isEditing: false,
//         carCount: 0,
//         fetchCars() {
//             axios.get('http://localhost:3000/api/cars')
//                 .then(response => {
//                     const fetchedCars = Array.isArray(response.data) ? response.data : [];
//                     // Ensure reg_number is unique
//                     const uniqueCars = fetchedCars.reduce((acc, car) => {
//                         if (!acc.some(item => item.reg_number === car.reg_number)) {
//                             acc.push(car);
//                         }
//                         return acc;
//                     }, []);
//                     this.cars = uniqueCars;
//                     this.carCount = this.cars.length; // Update the car count
//                     localStorage.setItem('cars', JSON.stringify(this.cars));
//                 })
//                 .catch(error => {
//                     console.error('Error fetching cars:', error);
//                     alert('Failed to fetch car data.');
//                 });
//         },
//         getMostPopularMake() {
//             axios.get('http://localhost:3000/api/cars/mostPopularMake')
//                 .then(response => {
//                     this.mostPopularMake = response.data.mostPopularMake || 'Unknown';
//                 })
//                 .catch(error => {
//                     console.error('Error fetching most popular make:', error);
//                     alert('Failed to fetch most popular make.');
//                 });
//         },
//         addOrUpdateCar() {
//             if (!this.form.reg_number) {
//                 alert('Registration Number is required.');
//                 return;
//             }
//             if (this.isEditing) {
//                 axios.put(`http://localhost:3000/api/cars/${this.form.reg_number}`, this.form)
//                     .then(() => {
//                         this.fetchCars();
//                         this.resetForm();
//                     })
//                     .catch(error => {
//                         console.error('Error updating car:', error);
//                         alert('Failed to update car.');
//                     });
//             } else {
//                 axios.post('http://localhost:3000/api/cars', this.form)
//                     .then(() => {
//                         this.fetchCars();
//                         this.resetForm();
//                     })
//                     .catch(error => {
//                         console.error('Error adding car:', error);
//                         alert('Failed to add car.');
//                     });
//             }
//         },
//         deleteCar(reg_number) {
//             axios.delete(`http://localhost:3000/api/cars/${reg_number}`)
//                 .then(() => {
//                     this.fetchCars();
//                 })
//                 .catch(error => {
//                     console.error('Error deleting car:', error);
//                     alert('Failed to delete car.');
//                 });
//         },
//         editCar(car) {
//             this.form = { ...car };
//             this.isEditing = true;
//         },
//         resetForm() {
//             this.form = { make: '', model: '', color: '', reg_number: '' };
//             this.isEditing = false;
//         },
//         init() {
//             const savedCars = localStorage.getItem('cars');
//             if (savedCars) {
//                 this.cars = JSON.parse(savedCars);
//                 this.carCount = this.cars.length; // Update the car count
//             } else {
//                 this.fetchCars();
//             }
//         }
//     }
// }
