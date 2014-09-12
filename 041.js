
// We shall say that an n-digit number is pandigital if it makes use of all 
// the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital 
// and is also prime.

// What is the largest n-digit pandigital prime that exists?

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

// 7 digits? An educated guess
permutate([7,6,5,4,3,2,1], function(arr){
	var num = parseInt(arr.join(''), 10);
	if (isPrime(num)) console.log(num);
});
