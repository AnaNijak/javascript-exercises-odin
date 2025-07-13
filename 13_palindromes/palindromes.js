const palindromes = function (text) {
	let cleanText = text
		.toLowerCase()
		.split("")
		.filter((char) => /^[a-z0-9]*$/gi.test(char))
		.join("");

	let cleanReversedText = cleanText.split("").reverse().join("");
	return cleanText.localeCompare(cleanReversedText) === 0;
};

// Do not edit below this line
module.exports = palindromes;
