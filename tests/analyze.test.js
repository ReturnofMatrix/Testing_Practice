const analyze = require('../src/analyze');

test('Correct object is returned.', () => {
    expect(analyze([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     });
});

test('Array with one element is returned properly.', () => {
    expect(analyze([5])).toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 1
     });
});

test('There are no elements in the array', () => {
    expect(analyze([])).toEqual('Enter array with elements.');
});
