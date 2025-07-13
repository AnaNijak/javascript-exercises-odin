const fibonacci = function (number) {
	if (number < 0) return "OOPS";

	let sequence = [0, 1];

	for (let i = 2; i <= number; i++) {
		sequence[i] = sequence[i - 1] + sequence[i - 2];
	}

	return sequence[number];
};

// Do not edit below this line
module.exports = fibonacci;
