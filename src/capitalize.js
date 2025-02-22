// A capitalize function that takes a string and 
// returns it with the first character capitalized.

function capitalize(str){

    if(typeof(str[0]) === 'string'){
        return str[0].toUpperCase() + str.slice(1);
    }

    return str;
}

module.exports = capitalize;