
// The number 3797 has an interesting property. Being prime itself, it is 
// possible to continuously remove digits from left to right, and remain prime 
// at each stage: 3797, 797, 97, and 7. Similarly we can work from right to 
// left: 3797, 379, 37, and 3.

// Find the sum of the only eleven primes that are both truncatable from left 
// to right and right to left.

// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

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

function isTruncatablePrime(n) {
	if (!isPrime(n)) {
		return false;
	}
	var str = n.toString();
	var len = str.length;
	while (len--) {
		if (!isPrime( parseInt(str.substring(0, len), 10) ) ||
				!isPrime( parseInt(str.substring(len), 10) )) {
			return false;
		}
	}
	return true;
}

function findTruncatablePrimes(max) {
	var primes = [];
	for (var i = 11; i < max; i += 2) {
		if (isTruncatablePrime(i)) {
			primes.push(i);
		}
	}
	return primes;
}

function sum(stack) {
	var sum = 0;
	while (stack.length) {
		sum += stack.pop();
	}
	return sum;
}

console.log( sum(findTruncatablePrimes(739398)) );
