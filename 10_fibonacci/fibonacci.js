const fibonacci = function(number) {
    let parsedNum = parseInt(number);
    if(isNaN(parsedNum) || parsedNum < 1) return "OOPS";
    if(parsedNum === 1 || parsedNum === 2) return 1;
    else return (fibonacci(parsedNum - 1) + fibonacci(parsedNum - 2));
};

// Do not edit below this line
module.exports = fibonacci;
