//https://javascript.info/task/counter-inc-dec

const makeCounter = () => {
	const counter = () => {
		return counter.count++;
	};
	counter.count = 0;
	counter.set = value => (counter.count = value);
	counter.decrease = () => counter.count--;

	return counter;
};
//https://javascript.info/task/sum-many-brackets
const sum = a => {
	const addNumbers = b => sum(a + b);

	addNumbers.toString = () => a;

	return addNumbers;
};

const counter = makeCounter();

console.log(counter());
console.log(counter());
counter.set(10);
console.log(counter());
console.log(sum(5)(-1)(2));
