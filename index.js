const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const CAR_DATA_URL = "https://bootcamp.projectcodex.co/cars.json";

let cars = [];

// Fetch initial car data
axios
  .get(CAR_DATA_URL)
  .then((response) => {
    cars = response.data;
  })
  .catch((error) => console.error("Error fetching car data:", error));

// Get all cars
app.get("/api/cars", (req, res) => {
  res.json(cars);
});

// Get the most popular car make
app.get("/api/cars/mostPopularMake", (req, res) => {
  const makeCount = cars.reduce((acc, car) => {
    acc[car.make] = (acc[car.make] || 0) + 1;
    return acc;
  }, {});

  const mostPopularMake = Object.entries(makeCount).reduce((a, b) =>
    a[1] > b[1] ? a : b
  )[0];

  res.json({ mostPopularMake });
});

// Add a new car
app.post("/api/cars", (req, res) => {
  const newCar = req.body;
  cars.push(newCar);
  res.status(201).json(newCar);
});

// Update a car by registration number
app.put("/api/cars/:reg_number", (req, res) => {
  const { reg_number } = req.params;
  const updatedCar = req.body;

  const carIndex = cars.findIndex((car) => car.reg_number === reg_number);
  if (carIndex !== -1) {
    cars[carIndex] = { ...cars[carIndex], ...updatedCar };
    res.json(cars[carIndex]);
  } else {
    res.status(404).json({ message: "Car not found" });
  }
});

// Delete a car by registration number
app.delete("/api/cars/:reg_number", (req, res) => {
  const { reg_number } = req.params;
  const carIndex = cars.findIndex((car) => car.reg_number === reg_number);

  if (carIndex !== -1) {
    const removedCar = cars.splice(carIndex, 1);
    res.json(removedCar);
  } else {
    res.status(404).json({ message: "Car not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
