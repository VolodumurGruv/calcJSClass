"use strict";
let people = [
	{
		firstName: "Sophie",
		lastName: "Cooper",
		age: 61,
	},
	{
		firstName: "Eleanor",
		lastName: "Ball",
		age: 37,
	},
	{
		firstName: "Glen",
		lastName: "Bush",
		age: 37,
	},
	{
		firstName: "Alejandro",
		lastName: "Allen",
		age: 60,
	},
	{
		firstName: "Derrick",
		lastName: "Reese",
		age: 62,
	},
	{
		firstName: "Janie",
		lastName: "Jensen",
		age: 50,
	},
	{
		firstName: "Rebecca",
		lastName: "Simmons",
		age: 29,
	},
	{
		firstName: "Herbert",
		lastName: "Blake",
		age: 59,
	},
	{
		firstName: "Sophie",
		lastName: "Cooper",
		age: 23,
	},
	{
		firstName: "Gabriel",
		lastName: "Fox",
		age: 42,
	},
	{
		firstName: "Virginia",
		lastName: "Chavez",
		age: 65,
	},
];

const peopleSorted = people.sort((a, b) => {
	if (a.firstName.toLowerCase() === b.firstName.toLowerCase()) {
		if (a.lastName.toLowerCase() === b.lastName.toLowerCase()) {
			return compare(a.age, b.age);
		}
		return compare(a.lastName, b.lastName);
	}
	return compare(a.firstName, b.firstName);
});

function compare(a, b) {
	if (typeof a === "string" && typeof b === "string") {
		a = a.toLowerCase();
		b = b.toLowerCase();
	}
	if (a < b) {
		return -1;
	}
	if (a > b) {
		return 1;
	}
	return 0;
}

console.log(peopleSorted);
