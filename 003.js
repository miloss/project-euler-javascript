
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

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

console.log( primeFactors(600851475143) );
