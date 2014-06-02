
// 2520 is the smallest number that can be divided by each of the numbers from 
// 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of 
// the numbers from 1 to 20?

function primeFactors(n) {
	var factors = [];
	var d = 2;
	while (n > 1) {
		while (n % d === 0) {
			factors.push(d);
			n = n/d;
		}
		d++;
		if (d*d > n && n > 1) {
			factors.push(n);
			break;
		}
	}
	return factors;
}

function minPolynomial(p1, p2) {
	var result = [];
	var x, y;
	while (p1.length || p2.length) {
		if (p1.length === 0) {
			result.push( p2.shift() );
		} else if (p2.length === 0) {
			result.push( p1.shift() );
		} else {
			x = p1[0];
			y = p2[0];
			if (x < y) {
				result.push( p1.shift() );
			} else if (x > y) {
				result.push( p2.shift() );
			} else {
				result.push( p1.shift() );
				p2.shift();
			}
		}
	}
	return result;
}

function minCommonMultiple(min, max) {
	var factors = [];
	while (min <= max) {
		factors = minPolynomial(factors, primeFactors(min));
		min++;
	}
	var multiple = 1;
	while (factors.length) {
		multiple *= factors.shift();
	}
	return multiple;
}


console.log( minCommonMultiple(1, 20) );
