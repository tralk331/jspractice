const task1 = (...urls) => {
	return Promise.all(urls.map(url => fetch(url).then(res => res.json()))).catch(
		error => `Error in task1: ${error.message}`
	);
};

const task2 = (...urls) => {
	return Promise.all(
		urls.map(url =>
			fetch(url)
				.then(res => res.json())
				.catch(error => error.message)
		)
	);
};

const task3 = (...urls) => {
	return urls
		.reduce((previous, current, index) => fetch(urls[index]).then(res => res.json()), Promise.resolve())
		.then(data => data)
		.catch(error => `Error in task3, last request: ${error.message}`);
};

const urls = [
	"https://notawbsit23.com",
	"https://jsonplaceholder.typicode.com/todos/",
	"https://jsonplaceholder.typicode.com/posts",
];

task1(urls[0], urls[1], urls[2]).then(data => console.log(data));
task2(urls[0], urls[1], urls[2]).then(data => console.log(data));
task3(urls[0], urls[2], urls[1]).then(data => console.log(data));
