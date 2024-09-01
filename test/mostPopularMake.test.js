// Import the required modules
import { expect } from 'chai';
import { mostPopularMake } from '../mostPopularMake.js'; 

describe('mostPopularMake', function() {
  it('should return the most popular make from a list of cars', function() {
    const cars = [
      { make: 'Toyota', model: 'Camry' },
      { make: 'Honda', model: 'Accord' },
      { make: 'Toyota', model: 'Corolla' },
      { make: 'Toyota', model: 'Highlander' },
      { make: 'Honda', model: 'Civic' }
    ];
    const result = mostPopularMake(cars);
    expect(result).to.equal('Toyota');
  });

  it('should handle an empty list', function() {
    const cars = [];
    const result = mostPopularMake(cars);
    expect(result).to.be.undefined;
  });

  it('should handle a list with a single make', function() {
    const cars = [
      { make: 'Ford', model: 'Mustang' },
      { make: 'Ford', model: 'F-150' }
    ];
    const result = mostPopularMake(cars);
    expect(result).to.equal('Ford');
  });

  it('should handle a list with all makes having the same count', function() {
    const cars = [
      { make: 'Chevrolet', model: 'Malibu' },
      { make: 'Ford', model: 'Focus' },
      { make: 'Honda', model: 'Fit' }
    ];
    const result = mostPopularMake(cars);
    expect(result).to.be.oneOf(['Chevrolet', 'Ford', 'Honda']);
  });
});
