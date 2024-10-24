
// Euler discovered the remarkable quadratic formula:
//    n² + n + 41

// It turns out that the formula will produce 40 primes for the consecutive 
// values n = 0 to 39. However, when n = 40, 402 + 40 + 41 = 40(40 + 1) + 41 is
// divisible by 41, and certainly when n = 41, 41² + 41 + 41 is clearly 
// divisible by 41.

// The incredible formula  n² − 79n + 1601 was discovered, which produces 80 
// primes for the consecutive values n = 0 to 79. The product of the 
// coefficients, −79 and 1601, is −126479.

// Considering quadratics of the form:

//   n² + an + b, where |a| < 1000 and |b| < 1000

//   where |n| is the modulus/absolute value of n
//   e.g. |11| = 11 and |−4| = 4

// Find the product of the coefficients, a and b, for the quadratic expression
// that produces the maximum number of primes for consecutive values of n, 
// starting with n = 0.

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

function primeStreakLength(a, b) {
    var n = 0;
    while ( isPrime(n*n + a*n + b) ) {
        n++;
    }
    return n;
}

function maxPairLength(start, stop) {
    var max = 0;
    var pair = [null, null];
    var streak;
    for (var i = start; i <= stop; i++) {
        for (var j = start; j <= stop; j++) {
            streak = primeStreakLength(i, j);
            if (streak > max) {
                max = streak;
                pair = [i, j];
            }
        }
    }
    return pair;
}

console.log( maxPairLength(-1000, 1000) );
