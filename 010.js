
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

function isPrime(n) {
  if (n < 2) return false;
  var q = Math.floor(Math.sqrt(n));
  for (var i = 2; i <= q; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(n) {
	var sum = 0;
	while (n--) {
		if (isPrime(n)) {
			sum += n;
		}
	}
	return sum;
}

console.log( sumPrimes(2000000) );
