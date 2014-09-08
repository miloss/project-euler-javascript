
// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Find the sum of all numbers which are equal to the sum of the factorial of 
// their digits.

// Note: as 1! = 1 and 2! = 2 are not sums they are not included.

function fac(digit) {
	var facts = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
	return facts[parseInt(digit, 10)];
}

function findCuriousNumbersSum(max) {
	var total = 0;
	var sum, digits, i;
	for (i = 10; i <= max; i++) {
		sum = 0;
		digits = (i+'').split('');
		while (digits.length) {
			sum += fac(digits.shift());
		}
		if (sum === i) {
			total += i;
		}
	}
	return total;
}

console.log( findCuriousNumbersSum(1000000) );
