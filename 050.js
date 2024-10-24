
// The prime 41, can be written as the sum of six consecutive primes:
//   41 = 2 + 3 + 5 + 7 + 11 + 13

// This is the longest sum of consecutive primes that adds to a prime below 
// one-hundred.

// The longest sum of consecutive primes below one-thousand that adds to a 
// prime, contains 21 terms, and is equal to 953.

// Which prime, below one-million, can be written as the sum of the most 
// consecutive primes?

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

function sumConsecutivePrimes(start, n) {
    var sum = nthPrime(start);
    var cnt = 1;
    while (cnt < n) {
        sum += nthPrime(start + cnt);
        cnt++;
    }
    return sum;
}

function maxStreak(limit) {
    var maxStart = 1, maxLength = 1, prime = 2;
    var start = 1;
    var length, sum;
    while (nthPrimeMemo(start) < limit) {
        length = 1;
        sum = sumConsecutivePrimes(start, length);
        while (sum < limit) {
            if (isPrime(sum) && length > maxLength) {
                maxStart = start;
                maxLength = length;
                prime = sum;
            }
            length++;
            sum = sumConsecutivePrimes(start, length);
        }
        start++;
    }
    return prime;
}

//FIXME Find dynamic programming solution
console.log( maxStreak(1000000) );
