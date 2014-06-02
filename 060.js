
// The primes 3, 7, 109, and 673, are quite remarkable. By taking any two 
// primes and concatenating them in any order the result will always be prime. 
// For example, taking 7 and 109, both 7109 and 1097 are prime. The sum of 
// these four primes, 792, represents the lowest sum for a set of four primes 
// with this property.

// Find the lowest sum for a set of five primes for which any two primes 
// concatenate to produce another prime.

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

var nthPrimeMemo = (function(){
	var memo = [];
	return function(n) {
		var num = memo[n];
		if (typeof num === 'undefined') {
			num = nthPrime(n);
			memo[n] = num;
		}
		return num;
	};
})();

function concatenable(a, b) {
	return isPrime(parseInt('' + a + b, 10)) && isPrime(parseInt('' + b + a, 10));
}

function findLowestSetOfPrimes(limit) {
	var primes = [];
	var i, j, k, l, m;
	for (i = 1; i < limit; i++) {
		primes[0] = nthPrimeMemo(i);
		
		for (j = i+1; j < limit; j++) {
			primes[1] = nthPrimeMemo(j);
			if (!concatenable(primes[0], primes[1])) continue;
			
			for (k = j+1; k < limit; k++) {
				primes[2] = nthPrimeMemo(k);
				if (!concatenable(primes[1], primes[2])) continue;
				if (!concatenable(primes[0], primes[2])) continue;
				
				for (l = k+1; l < limit; l++) {
					primes[3] = nthPrimeMemo(l);
					if (!concatenable(primes[2], primes[3])) continue;
					if (!concatenable(primes[1], primes[3])) continue;
					if (!concatenable(primes[0], primes[3])) continue;

					for (m = l+1; m < limit; m++) {
						primes[4] = nthPrimeMemo(m);
						if (!concatenable(primes[3], primes[4])) continue;
						if (!concatenable(primes[2], primes[4])) continue;
						if (!concatenable(primes[1], primes[4])) continue;
						if (!concatenable(primes[0], primes[4])) continue;

						console.log( primes );
					}
				}
			}
		}
	}
}

findLowestSetOfPrimes(2000);
