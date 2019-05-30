const costCalulator = require('./index');

describe('cost calculation', () => {
    it('adds whole numbers correctly', () => {
        expect(costCalulator.calculateCost(1, 5)).toBe(15);
    });
    it('adds floats correctly', () => {
        expect(costCalulator.calculateCost(0.2, 5)).toBe(3);
    });
    it('errors where arguments are non-numerical', () => {
        expect(() => costCalulator.calculateCost([], "foo")).toThrow('non-numerical argument supplied');
    });
    // it('adds floats correctly', () => {
    //     expect(costCalulator.calculateCost(0.2, 5)).toBe(3);
    // });
});