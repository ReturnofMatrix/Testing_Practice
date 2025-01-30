const caesar = require('../src/caecar');

test('lower case is handled properly.', () => {
    expect(caesar('xyz', 3)).toBe('abc');
});

test('Upper-lower mix is handled correctly.', () => {
    expect(caesar('HeLLo', 3)).toBe('KhOOr');
});

test('Special characters are handled correctly.', () => {
    expect(caesar('Hello, World!', 3)).toBe('Khoor, Zruog!');
});