import { expect } from 'chai';
import mostPopularMake from '../unit-testing/mostPopularMake'; 

describe('mostPopularMake', function() {
    it('should return the most popular car make', function() {
        const carList = [
            { make: 'Toyota', model: 'Camry' },
            { make: 'Honda', model: 'Accord' },
            { make: 'Toyota', model: 'Corolla' },
            { make: 'Honda', model: 'Civic' },
            { make: 'Toyota', model: 'Prius' }
        ];
        const result = mostPopularMake(carList);
        expect(result).to.equal('Toyota');
    });

    it('should return null for an empty list', function() {
        const carList = [];
        const result = mostPopularMake(carList);
        expect(result).to.be.null;
    });

    it('should throw an error if the input is not an array', function() {
        const carList = 'not an array';
        expect(() => mostPopularMake(carList)).to.throw('Input must be an array');
    });

    it('should handle ties by returning the first make with the highest count', function() {
        const carList = [
            { make: 'Toyota', model: 'Camry' },
            { make: 'Honda', model: 'Accord' },
            { make: 'Toyota', model: 'Corolla' },
            { make: 'Honda', model: 'Civic' }
        ];
        const result = mostPopularMake(carList);
        expect(result).to.equal('Toyota');
    });
});
