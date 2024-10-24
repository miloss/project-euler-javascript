
// It was proposed by Christian Goldbach that every odd composite number can be 
// written as the sum of a prime and twice a square.

//   9 = 7 + 2x1^2
//   15 = 7 + 2x2^2
//   21 = 3 + 2x3^2
//   25 = 7 + 2x3^2
//   27 = 19 + 2x2^2
//   33 = 31 + 2x1^2

// It turns out that the conjecture was false.

// What is the smallest odd composite that cannot be written as the sum of a 
// prime and twice a square?

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

function isGoldbach(n) {
    var limit = Math.floor( Math.sqrt(n/2) );
    for (var i = 1; i <= limit; i++) {
        if (isPrime(n - 2*i*i)) return true;
    }
    return false;
}

function findSmallest() {
    var i = 1;
    while (isPrime(2*i + 1) || isGoldbach(2*i + 1)) {
        i++;
    }
    return (2*i + 1);
}

console.log( findSmallest() );
