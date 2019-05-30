const costCalulator = require('./index');

describe('cost calculation', () => {
    it('adds stuff up right', () => {
        expect(costCalulator.calculateCost(1, 5)).toBe(15);
    });
});