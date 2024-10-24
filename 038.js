
// Take the number 192 and multiply it by each of 1, 2, and 3:

//   192 × 1 = 192
//   192 × 2 = 384
//   192 × 3 = 576

// By concatenating each product we get the 1 to 9 pandigital, 192384576. We 
// will call 192384576 the concatenated product of 192 and (1,2,3)

// The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, 
// and 5, giving the pandigital, 918273645, which is the concatenated product 
// of 9 and (1,2,3,4,5).

// What is the largest 1 to 9 pandigital 9-digit number that can be formed as 
// the concatenated product of an integer with (1,2, ... , n) where n > 1?

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

function isConcatenatedProduct(string) {
    var len = string.length;
    var i, j, num, str;
    for (i = 1; i <= len/2; i++) {
        j = 2;
        num = parseInt(string.substr(0, i), 10);
        str = num + '' + (num * 2);
        while (str.length < len && str === string.substr(0, str.length)) {
            j++;
            str = str + (num * j) + '';
        }
        if (str === string) return true;
    }
    return false;
}

permutate([9,8,7,6,5,4,3,2,1], function(arr){
    if (isConcatenatedProduct(arr.join(''))) {
        console.log( parseInt(arr.join(''), 10) );
    }
});
