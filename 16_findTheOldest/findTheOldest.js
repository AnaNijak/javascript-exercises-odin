const findTheOldest = function (people) {
	let peopleWithAges = people.map((person) => {
		let deathYear = person.yearOfDeath ? person.yearOfDeath : new Date().getFullYear();

		return {
			name: person.name,
			age: deathYear - person.yearOfBirth,
		};
	});
	let peopleWithAgesSorted = peopleWithAges.sort((a, b) => a.age - b.age);
	let oldestPerson = peopleWithAgesSorted[people.length - 1];
	return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
