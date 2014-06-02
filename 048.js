
// The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

// Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.

function power(n, power) {
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
	return digits.reverse().join('');
}

function sum(a, b) {
	var lena = a.length;
	var lenb = b.length;
	var sum = '', cr = 0, x, y;
	for (var i = 1; (i <= lena || i <= lenb); i++) {
		x = i > lena ? 0 : parseInt( a.charAt(lena - i), 10 );
		y = i > lenb ? 0 : parseInt( b.charAt(lenb - i), 10 );
		sum = ((x + y + cr)%10) + '' + sum;
		cr = Math.floor((x + y + cr)/10);
	}
	if (cr > 0) {
		sum = cr + '' + sum;
	}
	return sum;
}

function selfPowerSeries(n) {
	var result = '';
	while (n--) {
		result = sum(result, power(n+1, n+1));
	}
	return result;
}

console.log( selfPowerSeries(1000) );
