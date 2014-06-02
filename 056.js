
// A googol (10^100) is a massive number: one followed by one-hundred zeros; 
// 100^100 is almost unimaginably large: one followed by two-hundred zeros. 
// Despite their size, the sum of the digits in each number is only 1.

// Considering natural numbers of the form, a^b, where a, b < 100, what is the 
// maximum digital sum?

function powerDigitSum(n, power) {
	var digits = [1];
	while (power--) {
		var cr = 0;
		for (var i = 0; i < digits.length; i++) {
			var num = n * digits[i] + cr;
			digits[i] = num % 10;
			cr = Math.floor(num/10);
		}
		while (cr > 0) {
			digits.push(cr % 10);
			cr = Math.floor(cr/10);
		}
	}
	var sum = 0;
	while (digits.length) {
		sum += digits.shift();
	}
	return sum;
}

function maximumDigitalPowerSum(max) {
	var maxsum = 0;
	var n, pow, sum;
	for (n = 1; n < max; n++) {
		for (pow = 1; pow < max; pow++) {
			maxsum = Math.max(maxsum, powerDigitSum(n, pow));
		}
	}
	return maxsum;
}

console.log( maximumDigitalPowerSum(100) );
