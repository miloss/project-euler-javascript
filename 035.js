
// The number, 197, is called a circular prime because all rotations of the 
// digits: 197, 971, and 719, are themselves prime.

// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 
// 71, 73, 79, and 97.

// How many circular primes are there below one million?

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

function isCircularPrime(n) {
	if (!isPrime(n)) {
		return false;
	}
	var str = n.toString();
	var len = str.length;
	while (len--) {
		if (!isPrime( parseInt(str.substring(len) + str.substring(0, len), 10) )) {
			return false;
		}
	}
	return true;
}

function countCirculars(max) {
	var cnt = 0;
	if (max >= 2) {
		cnt++;// '2' is a circular prime
	}
	for (var i = 3; i < max; i += 2) {
		if (isCircularPrime(i)) {
			cnt++;
		}
	}
	return cnt;
}

console.log( countCirculars(1000000) );
