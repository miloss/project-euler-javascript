
// n! means n x (n − 1) x ... x 3 x 2 x 1

// For example, 10! = 10 x 9 x ... x 3 x 2 x 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

function factorialDigitSum(n) {
    var digits = [1];
    while (n) {
        var cr = 0;
        for (var i = 0; i < digits.length; i++) {
            var num = n * digits[i] + cr;
            digits[i] = num % 10;
            cr = Math.floor(num/10);
        }
        while (cr > 0) {
            digits.push(cr % 10);
            cr = Math.floor(cr/10);
        }
        n--;
    }

    var sum = 0;
    while (digits.length) {
        sum += digits.shift();
    }
    return sum;
}

console.log( factorialDigitSum(100) );
