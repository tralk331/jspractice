/*
    Make a function that will return a
    greeting statement that uses an input;
    your program should return, "Hello, <name> how are you doing today?".
*/
function greet(name) {
	return `Hello, ${name} how are you doing today?`;
}
/*
    In this little assignment you are given a string of space separated numbers, 
    and have to return the highest and lowest number.
*/
function highAndLow(numbers) {
	const numberArraySorted = numbers
		.split(" ")
		.map(numberString => Number(numberString))
		.sort((a, b) => a - b);
	return `${numberArraySorted[numberArraySorted.length - 1]} ${numberArraySorted[0]}`;
}

function posAverage(s) {
	const numbers = s.split(", ");
	let allPositions = 0;
	let commonPositions = 0;
	for (let i = 0; i < numbers.length - 1; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			for (let k = 0; k < numbers[i].length; k++) {
				if (numbers[i][k] === numbers[j][k]) {
					commonPositions++;
				}
				allPositions++;
			}
		}
	}
	return (commonPositions / allPositions) * 100;
}
