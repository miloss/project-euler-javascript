
// A permutation is an ordered arrangement of objects. For example, 3124 is one
// possible permutation of the digits 1, 2, 3 and 4. If all of the permutations 
// are listed numerically or alphabetically, we call it lexicographic order. 
// The lexicographic permutations of 0, 1 and 2 are:

//  012   021   102   120   201   210

// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4,
// 5, 6, 7, 8 and 9?

function nthPermutation(n, digits) {
    if (digits.length === 1) {
        return digits[0] + '';
    }
    var fact = factorial(digits.length - 1);
    var i = Math.floor(n/fact);
    var first = digits.splice(i, 1);
    return first + nthPermutation(n - i*fact, digits);
};

function factorial(n){
    var fact = 1;
    while (n) {
        fact *= n;
        n--;
    }
    return fact;
};

console.log( nthPermutation(1000000 - 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) );
