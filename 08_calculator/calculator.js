const add = function(...nums) {
  return nums.reduce( (total, num) => total += num, 0);
};

const subtract = function(a = 0, b = 0) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce( (total, num) => total += num, 0);
};

const multiply = function(...nums) {
  return nums.reduce( (total, num) => total *= num, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
  output = 1;
	for(let i = 1; i <= num; i++) {
    output *= i;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
