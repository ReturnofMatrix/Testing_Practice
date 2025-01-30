function caecar( str, shift){
    let cipher = ''
    
    for(let i = 0; i < str.length; i++)
    {
        let char = str.charCodeAt(i);
        shift = shift % 26;
        if(shift < 0){
            shift += 26;
        }

        if(char >= 65 && char <= 90)
        {
            char = char - 65;
            let newChar = (char + shift) % 26;
            newChar += 65;
            cipher += String.fromCharCode(newChar);

        }
        else if(char >= 97 && char <= 122)
        {
            char = char - 97;
            let newChar = (char + shift) % 26;
            newChar += 97;
            cipher += String.fromCharCode(newChar);
        }
        else{
            cipher += String.fromCharCode(char);
        }  
    }
    return cipher;
}

module.exports = caecar;