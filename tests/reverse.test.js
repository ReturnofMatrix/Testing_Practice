const reverse = require('../src/reverse');

test('harsha is reversed to ahsrah', () => {
    expect(reverse('harsha')).toBe('ahsrah');
});

test('AAAA is reversed to AAAA', () => {
    expect(reverse('AAAA')).toBe('AAAA');
});

test('123 is reversed to 321', () => {
    expect(reverse('123')).toBe('321');
});

test('Special characters like !--+ are reversed to +--!', () => {
    expect(reverse('!--+')).toBe('+--!');
});

test('null is returned as it is.', () => {
    expect(reverse('')).toBe('');
});