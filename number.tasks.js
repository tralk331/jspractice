function makeNegative(num) {
	if (num < 0) return num;
	return 0 - num;
}
function boxCapacity(length, width, height) {
	let acrossCount = Math.floor((length * 12) / 16);
	let deepCount = Math.floor((width * 12) / 16);
	let highCount = Math.floor((height * 12) / 16);
	return acrossCount * deepCount * highCount;
}
function step(g, m, n) {
	const isPrime = number => {
		if (number === 2) return true;
		if (number === 3) return true;
		for (let i = 2; i <= Math.sqrt(number); i++) {
			if (number % i === 0) return false;
		}
		return true;
	};
	for (let i = m; i <= n; i++) {
		if (isPrime(i) && isPrime(i + g)) {
			return [i, i + g];
		}
	}
	return null;
}
function encodeResistorColors(ohmsString) {
	const codes = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "gray", "white"];
	let value = ohmsString.split(" ")[0];
	let exponent = 0;
	//check if k or m is present in string
	if (value[value.length - 1] === "k") {
		value = Number(value.substring(0, value.length - 1));
		if (value < 10) exponent = 2;
		else if (value < 100) exponent = 3;
		else exponent = 4;
		value = String(value).replace(".", "");
	} else if (value[value.length - 1] === "M") {
		value = Number(value.substring(0, value.length - 1));
		if (value < 10) exponent = 5;
		else if (value < 100) exponent = 6;
		else exponent = 7;
		value = String(value).replace(".", "");
	} else {
		value = Number(value);
		if (value < 100) exponent = 0;
		else exponent = 1;
		value = String(value).replace(".", "");
	}
	if (value.length === 1) value += "0";
	return `${codes[value[0]]} ${codes[value[1]]} ${codes[exponent]} gold`;
}
