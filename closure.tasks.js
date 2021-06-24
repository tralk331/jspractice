//https://javascript.info/task/filter-through-function
const inBetween = (a, b) => {
	return input => input >= a && input <= b;
};

const inArray = values => {
	return input => values.includes(input);
};

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

//https://javascript.info/task/sort-by-field

const byField = field => {
	return (a, b) => (a[field] > b[field] ? 1 : -1);
};
let users = [
	{ name: "John", age: 20, surname: "Johnson" },
	{ name: "Pete", age: 18, surname: "Peterson" },
	{ name: "Ann", age: 19, surname: "Hathaway" },
];
users.sort(byField("name"));
console.log(users);
