const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (array) {
	return array.reduce((sum, number) => {
		return (sum += number);
	}, 0);
};

const multiply = function (array) {
	return array.reduce((product, number) => {
		return product * number;
	});
};

const power = function (base, power) {
	return base ** power;
};

const factorial = function (number) {
	let factorial = 1;
	for (let i = 2; i <= number; i++) {
		factorial = factorial * i;
	}
	return factorial;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
