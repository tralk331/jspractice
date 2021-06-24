const maxSubArray = values => {
	let current = values[0];
	let max = values[0];
	for (let i = 1; i < values.length; i++) {
		current = Math.max(values[i], current + values[i]);
		if (current > max) max = current;
	}
	return max;
};

//Write the function camelize(str) that changes dash-separated words like “my-short-string”
//into camel-cased “myShortString”.

const camelize = property => {
	const wordList = property.split("-");
	return wordList.reduce((final, current, index) => {
		if (index === 0) return current;
		return final + current[0].toUpperCase() + current.slice(1);
	});
};

//Write a function filterRange(arr, a, b) that gets an array arr,
//looks for elements with values higher or equal to a and lower or equal to b
//and return a result as an array.

const filterRange = (values, min, max) => values.filter(value => value >= min && value <= max);

//Write a function filterRangeInPlace(arr, a, b)
//that gets an array arr and removes from it all values except
//those that are between a and b. The test is: a ≤ arr[i] ≤ b.

const filterRangeInPlace = (array, min, max) => {
	for (let i = 0; i < array.length; i++) {
		if (array[i] < min || array[i] > max) {
			array.splice(i, 1);
			i--;
		}
	}
};
const sortArrayDescInPlace = arr => {
	arr.sort().reverse();
};

const sortArrayDesc = arr => {
	let sorted = [...arr];
	return sorted.sort().reverse();
};

//https://javascript.info/task/calculator-extendable

function Calculator() {
	return {
		operations: [
			{ operator: "+", callback: (a, b) => Number(a) + Number(b) },
			{ operator: "-", callback: (a, b) => Number(a) - Number(b) },
		],
		calculate: function (expression) {
			const [leftOperand, operator, rightOperand] = expression.split(" ");
			for (let operation of this.operations) {
				if (operation.operator === operator) return operation.callback(leftOperand, rightOperand);
			}
		},
		addMethod: function (operator, callback) {
			this.operations.push({
				operator,
				callback,
			});
		},
	};
}
const testArrayWithNumbers = [5, 3, -2, 7, 1];

console.log(maxSubArray(testArrayWithNumbers));
console.log(camelize("string-to-convert"));
console.log(filterRange(testArrayWithNumbers, 1, 5));
const testArray2 = [5, 3, 8, 1];
filterRangeInPlace(testArray2, 1, 4);
console.log(testArray2);

const testarray3 = [4, 2, 6, 7, 9, -2];
sortArrayDescInPlace(testarray3);
console.log(testarray3);
console.log(sortArrayDesc(testArrayWithNumbers));

let calc = new Calculator();
console.log(calc.calculate("3 + 2"));
calc.addMethod("*", (a, b) => a * b);

console.log(calc.calculate("6 * 8"));
