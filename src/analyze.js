function analyze(arr){
    if(arr.length == 0){
        return 'Enter array with elements.';
    }

    let min = Infinity, max = -Infinity, sum = 0;

    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
        sum += arr[i];
    }
    let avg = sum / arr.length;

    return {
        average : avg,
        min : min,
        max : max,
        length : arr.length
    }
}

module.exports = analyze;