
// It can be seen that the number, 125874, and its double, 251748, contain
// exactly the same digits, but in a different order.

// Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x,
// contain the same digits.

function sameDigits(n) {
    var original = (n+'').split('').sort().join();
    var str;
    for (var i = 2; i <= 6; i++) {
        str = (n*i)+'';
        if (str.split('').sort().join() !== original) {
            return false;
        }
    }
    return true;
}

function findMinSixfoldNumber() {
    var i = 1;
    while (!sameDigits(i)) {
        i++;
    }
    return i;
}

console.log( findMinSixfoldNumber() );
