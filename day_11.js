console.log("Day 11");

function fibonacci(n) {
	// write your solution here
	if (n === 0) {
		return 0;
	} else if (n === 1) {
		return 1;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

console.log(`fibonacci value at position 5: ${fibonacci(10)}`)
