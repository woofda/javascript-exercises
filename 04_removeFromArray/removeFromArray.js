const removeFromArray = function(array, ...restOfArgs) {
    for(let i = 0; i < array.length; i++){
        for(item of restOfArgs){
            if(array[i] === item){
                array.splice(i, 1);
                i--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
