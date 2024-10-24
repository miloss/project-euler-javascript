
// We shall say that an n-digit number is pandigital if it makes use of all the 
// digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 
// through 5 pandigital.

// The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing 
// multiplicand, multiplier, and product is 1 through 9 pandigital.

// Find the sum of all products whose multiplicand/multiplier/product identity 
// can be written as a 1 through 9 pandigital.

// HINT: Some products can be obtained in more than one way so be sure to only 
// include it once in your sum.


function permutate(array, callback) {
    function p(array, index, callback) {
        function swap(a, i1, i2) {
            var t = a[i1];
            a[i1] = a[i2];
            a[i2] = t;
        }
        if (index == array.length - 1) {
            callback(array);
            return 1;
        } else {
            var count = p(array, index + 1, callback);
            for (var i = index + 1; i < array.length; i++) {
                swap(array, i, index);
                count += p(array, index + 1, callback);
                swap(array, i, index);
            }
            return count;
        }
    }

    return p(array, 0, callback);
}

function findUnusualProducts() {
    var products = [];
    permutate([1,2,3,4,5,6,7,8,9], function(arr){
        var a, b, c;
        var i, j;
        for (i = 0; i < 7; i++) {
            for (j = i+1; j < 8; j++) {
                a = parseInt(arr.slice(0, i+1).join(''), 10);
                b = parseInt(arr.slice(i+1, j+1).join(''), 10);
                c = parseInt(arr.slice(j+1).join(''), 10);
                if (a*b === c) {
                    if (products.indexOf(c) === -1) {
                        products.push(c);
                    }
                }
            }
        }
    });
    return products;
}

console.log( findUnusualProducts() );
