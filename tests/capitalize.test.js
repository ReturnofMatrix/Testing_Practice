const capitalize = require('../src/capitalize');

test("roshan is capitalized to Roshan", () => {
    expect(capitalize('roshan')).toBe('Roshan');
});

test("Arav is unchanged", () => {
    expect(capitalize('Arav')).toBe('Arav');
});

test('null is handled properly.', () => {
    expect(capitalize('')).toBe('');
});

test("special characters are returned as it is", () => {
    expect(capitalize('!aaa')).toBe('!aaa');
});

test("number characters are returned as it is", () => {
    expect(capitalize('123a')).toBe('123a');
});
