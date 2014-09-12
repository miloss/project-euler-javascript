
// Distinct primes factors

// https://projecteuler.net/problem=47

function primeFactors(n) {
	var factors = [];
	var d = 2, included = false;
	while (n > 1) {
		included = false;
		while (n % d === 0) {
			if (!included) factors.push(d);
			included = true;
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

function consecutivePrimesStreak(length) {
	var len = 0, cnt = 1;
	while (len < length) {
		if (primeFactors(cnt).length === length) {
			len++;
		} else {
			len = 0;
		}
		cnt++;
	}
	return cnt - length;
}

console.log( consecutivePrimesStreak(4) );
