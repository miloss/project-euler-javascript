
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see 
// that the 6th prime is 13.

// What is the 10 001st prime number?

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

function nthPrime(n) {
	var num = 1;
	var i = 0;
	while (i < n) {
		num++;
		while (!isPrime(num)) {
			num++;
		}
		i++;
	}
	return num;
}

console.log( nthPrime(10001) );
