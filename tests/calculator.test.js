const calculator = require('../src/calculator');

test('2 + 5 is 7', () => {
    expect(calculator.add( 2, 5)).toBe(7);
});

test('2 - 5 is -3', () => {
    expect(calculator.sub( 2, 5)).toBe(-3);
});

test('2 * 5 is 10', () => {
    expect(calculator.multi( 2, 5)).toBe(10);
});

test('5 / 2 is 2.5', () => {
    expect(calculator.divide( 5, 2)).toBe(2.5);
});

test('Cannot divide by 0', () => {
    expect(calculator.divide( 2, 0)).toBe('Cannot divide by 0.');
});

test('Input should be two numbers.', () => {
    expect(calculator.add( 'a', 'b')).toBe('Input should be two numbers.');
});

