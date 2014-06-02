
// A palindromic number reads the same both ways. The largest palindrome made 
// from the product of two 2-digit numbers is 9009 = 91 x 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(n) {
	var temp = n;
	var reverse = 0;
	while (temp !== 0) {
		reverse = reverse * 10 + temp % 10;
		temp = Math.floor(temp/10);
	}
	return reverse === n;
}

function maxProductPalindrome(min, max) {
	var maximum = 0;
	var product;
	var a = min;
	while (a <= max) {
		var b = min;
		while (b <= max ) {
			product = a * b;
			if (isPalindrome(product) && product > maximum) {
				maximum = product;
			}
			b++;
		}
		a++;
	}
	return maximum;
}

console.log( maxProductPalindrome(100, 999) );
