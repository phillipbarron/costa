const costCalulator = require('./index');

describe('cost calculation', () => {
    it('adds stuff up right', () => {
        expect(costCalulator.calculateCost(.023, 12)).toBe(1);
    });
});