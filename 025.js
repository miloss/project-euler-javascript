
// The Fibonacci sequence is defined by the recurrence relation:

//     Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.

// Hence the first 12 terms will be:

//     F1 = 1
//     F2 = 1
//     F3 = 2
//     F4 = 3
//     F5 = 5
//     F6 = 8
//     F7 = 13
//     F8 = 21
//     F9 = 34
//     F10 = 55
//     F11 = 89
//     F12 = 144

// The 12th term, F12, is the first term to contain three digits.

// What is the first term in the Fibonacci sequence to contain 1000 digits?

var PHI = (1 + Math.sqrt(5)) / 2;

function log10(n) {
    return Math.log(n) / Math.LN10;
}

function logfib(n) {
    // @see Binnet
    return 1 + Math.floor((n * log10(PHI)) - (log10(5) / 2));
}

function firstFibonnaciOver(n) {
    var i = 1;
    while ( n > logfib(i) ) {
        i++;
    }
    return i;
}

console.log( firstFibonnaciOver(1000) );
