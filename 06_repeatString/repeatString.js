const repeatString = function (text, numberOfRepeats) {
	if (numberOfRepeats < 0) return "ERROR";
	if (text === "") return text;

	let repeatedString = "";

	let repeat = 0;
	while (repeat < numberOfRepeats) {
		repeatedString += text;
		repeat++;
	}

	return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
