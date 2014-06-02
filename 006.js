
// The sum of the squares of the first ten natural numbers is,
//   1^2 + 2^2 + ... + 10^2 = 385

// The square of the sum of the first ten natural numbers is,
//   (1 + 2 + ... + 10)^2 = 55^2 = 3025

// Hence the difference between the sum of the squares of the first ten natural 
// numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred 
// natural numbers and the square of the sum.

function sumSquares(n) {
	var sum = 0;
	while (n > 0) {
		sum += Math.pow(n, 2);
		n--;
	}
	return sum;
}

function squareSum(n) {
	return Math.pow( (n*(n+1))/2, 2 );
}

function diffss(n) {
	return squareSum(n) - sumSquares(n);
}

console.log( diffss(100) );
