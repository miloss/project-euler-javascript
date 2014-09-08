
// The decimal number, 585 = 1001001001(binary), is palindromic in both bases.

// Find the sum of all numbers, less than one million, which are palindromic in 
// base 10 and base 2.

// (Please note that the palindromic number, in either base, may not include 
// leading zeros.)

function isPalindromic(a) {
	var len = a.length;
	if (len === 0 || len === 1) return true;
	if (len === 2) return a[0] === a[1];
	if (a[0] !== a[len-1]) return false;
	return isPalindromic(a.splice(1, len-2));
}

function findPalindromicNumbersSum(max) {
	var sum = 0;
	while (max--) {
		if (!isPalindromic( (max+'').split('') )) continue;
		if (!isPalindromic( max.toString(2).split('') )) continue;
		sum += max;
	}
	return sum;
}

console.log( findPalindromicNumbersSum(1000000) );
