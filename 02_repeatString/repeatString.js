const repeatString = function(str, num) {
    if(num < 0) {
        return "ERROR";
    }
    let output = '';
    for(; num > 0; num--){
        output += str;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
