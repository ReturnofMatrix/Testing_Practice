const calculator = {

    add(a, b){
        if(typeof(a) !== 'number' || typeof(b) !== 'number') 
            {
                return 'Input should be two numbers.';
            }
        return a + b;
    },

    sub(a, b){
        if(typeof(a) !== 'number' || typeof(b) !== 'number') 
            {
                return 'Input should be two numbers.';
            }
        return a - b;
    },

    multi(a, b){
        if(typeof(a) !== 'number' || typeof(b) !== 'number') 
            {
                return 'Input should be two numbers.';
            }

        return a * b;
    },

    divide(a, b){
        if(typeof(a) !== 'number' || typeof(b) !== 'number') 
        {
            return 'Input should be two numbers.';
        }
        if(b == 0){
            return 'Cannot divide by 0.';
        }
        return a / b;
    }
}

module.exports = calculator;
