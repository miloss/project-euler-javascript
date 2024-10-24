
// Pentagonal numbers are generated by the formula, Pn=n(3n−1)/2. The first ten 
// pentagonal numbers are:

//   1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...

// It can be seen that P4 + P7 = 22 + 70 = 92 = P8. However, their difference, 
// 70 − 22 = 48, is not pentagonal.

// Find the pair of pentagonal numbers, Pj and Pk, for which their sum and 
// difference are pentagonal and D = |Pk − Pj| is minimised; what is the value 
// of D?

function P(n) {
    return (n*(3*n-1))/2;
}

var isPentagonalNumber = (function(){
    var memo = [false];
    return function(number) {
        var result = memo[number];
        if (typeof result === 'undefined') {
            var length = memo.length;
            if (number < length) {
                result = false;
                memo[number] = result;
            } else {
                var n = 1;
                while (P(n) < number) {
                    memo[P(n)] = true;
                    n++;
                }
                result = number === P(n);
                memo[number] = result;
            }
        }
        return result;
    };
})();

function findMinPentagonalPair(max) {
    var i, j;
    for (i = 1; i <= max; i++) {
        for (j = i; j <= max; j++) {
            if (isPentagonalNumber(P(i)+P(j)) && isPentagonalNumber(P(j)-P(i))) {
                return [P(i), P(j)];
            }
        }
    }
    return null;
}

console.log( findMinPentagonalPair(10000) );
