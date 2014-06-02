
// Each new term in the Fibonacci sequence is generated by adding the previous
// two terms. By starting with 1 and 2, the first 10 terms will be:

//   1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not 
// exceed four million, find the sum of the even-valued terms.

var fibonacci = (function() {
	var memo = [1, 2];
	return function(n) {
		var result = memo[n];
		if (typeof memo[n] !== 'number') {
			result = fibonacci(n - 1) + fibonacci(n - 2);
			memo[n] = result;
		}
		return result;
	};
})();

function fibonacciEvenSum(n) {
	var sum = 0;
	var i = 0;
	var number = fibonacci(i);
	while (number <= n) {
		if (number % 2 === 0) {
			sum += number;
		}
		i++;
		number = fibonacci(i);
	}
	return sum;
}


console.log( fibonacciEvenSum( 4000000 ) );
