//Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.
//Every call is saved as an array of arguments.
const spy = func => {
	function wrapper(...args) {
		wrapper.calls.push(args);
		return func.apply(this, args);
	}
	wrapper.calls = [];
	return wrapper;
};
function work(a, b) {
	console.log(a + b); // work is an arbitrary function or method
}
work = spy(work);
work(1, 2); // 3
work(4, 5); // 9
for (let args of work.calls) {
	console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}

//Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.

const delay = (func, delayAmount) => {
	return function (...args) {
		setTimeout(() => func.apply(this, args), delayAmount);
	};
};
function f(x) {
	console.log(x);
}
// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms

//https://javascript.info/task/debounce
let logText = text => console.log(text);
const debounce = (func, delay) => {
	let timer;
	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(() => func.apply(this, args), delay);
	};
};
logText = debounce(logText, 1000);

logText("this should not be logged");
setTimeout(() => logText("but this should"), 400);
