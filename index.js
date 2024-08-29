import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let cars = [];

// Fetch initial data
const fetchInitialData = async () => {
  try {
    const response = await axios.get('https://bootcamp.projectcodex.co/cars.json');
    cars = response.data;
  } catch (error) {
    console.error('Error fetching initial data:', error);
  }
};

fetchInitialData();

app.get('/api/most-popular-make', async (req, res) => {
  try {
    const makeCounts = cars.reduce((acc, car) => {
      acc[car.make] = (acc[car.make] || 0) + 1;
      return acc;
    }, {});

    const mostPopularMake = Object.entries(makeCounts).reduce((a, b) => a[1] > b[1] ? a : b)[0];

    res.json({ mostPopularMake, makeCounts });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing data: ' + error.message });
  }
});

// Create a new car
app.post('/api/cars', (req, res) => {
  const newCar = req.body;
  newCar.id = cars.length + 1; 
  cars.push(newCar);
  res.status(201).json(newCar);
});

// Read all cars
app.get('/api/cars', (req, res) => {
  res.json(cars);
});

app.get('/api/cars/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const car = cars.find(c => c.id === id);
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ error: 'Car not found' });
  }
});

// Update a car
app.put('/api/cars/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const carIndex = cars.findIndex(c => c.id === id);
  if (carIndex !== -1) {
    cars[carIndex] = { ...cars[carIndex], ...req.body };
    res.json(cars[carIndex]);
  } else {
    res.status(404).json({ error: 'Car not found' });
  }
});

// Delete a car
app.delete('/api/cars/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const carIndex = cars.findIndex(c => c.id === id);
  if (carIndex !== -1) {
    const deletedCar = cars.splice(carIndex, 1);
    res.json(deletedCar[0]);
  } else {
    res.status(404).json({ error: 'Car not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});