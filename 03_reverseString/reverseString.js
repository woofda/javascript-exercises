const reverseString = function(str) {
    let output = "";
    for(letter of str){
        output = letter + output;
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
