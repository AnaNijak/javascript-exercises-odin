const removeFromArray = function (inputArray, ...itemsToBeRemoved) {
	return inputArray.filter((element) => !itemsToBeRemoved.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
