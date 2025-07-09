const sumAll = function (rangeStart, rangeEnd) {
	if (!Number.isInteger(rangeStart) || !Number.isInteger(rangeEnd)) return "ERROR";
	if (rangeStart < 0 || rangeEnd < 0) return "ERROR";

	if (rangeStart > rangeEnd) [rangeStart, rangeEnd] = [rangeEnd, rangeStart];

	let sum = 0;
	for (let i = rangeStart; i <= rangeEnd; i++) sum += i;

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
