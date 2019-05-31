const calulator = require('./calculator');

describe('cost calculation', () => {
    it('adds whole numbers correctly', () => {
        expect(calulator.calculateCumulativeValue(1, 5)).toBe(15);
    });
    it('adds floats correctly', () => {
        expect(calulator.calculateCumulativeValue(0.2, 5)).toBe(3);
    });
    it('errors where arguments are non-numerical', () => {
        const invalidArguments = [
            { rate: 1, months: {} },
            { rate: 1, months: [] },
            { rate: 1, months: 'foo' },
            { rate: {}, months: 1 },
            { rate: [], months: 1 },
            { rate: 'foo', months: 1 }
        ]
        invalidArguments.forEach(invalidArgument => {
            expect(() => calulator.calculateCumulativeValue(invalidArgument.rate, invalidArgument.months)).toThrow('non-numerical argument supplied');
        });

    });
});