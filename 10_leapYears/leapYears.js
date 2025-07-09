const leapYears = function (year) {
	if (!Number.isInteger(year)) return "ERROR";

	if (year % 100 == 0) return year % 400 == 0;
	if (year % 4 == 0) return true;

	return false;
};

// Do not edit below this line
module.exports = leapYears;
