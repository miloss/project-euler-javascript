
// The nth term of the sequence of triangle numbers is given by,
// t(n) = 1/2 * n(n+1);
// so the first ten triangle numbers are:

//   1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

// By converting each letter in a word to a number corresponding to its 
// alphabetical position and adding these values we form a word value. For 
// example, the word value for SKY is 19 + 11 + 25 = 55 = t10. If the word value
// is a triangle number then we shall call the word a triangle word.

// Using [words.txt], a 16K text file containing nearly two-thousand common 
// English words, how many are triangle words?

var isTriangleNumber = (function(){
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
				while ((n*(n+1))/2 < number) {
					memo[(n*(n+1))/2] = true;
					n++;
				}
				result = number === (n*(n+1))/2;
				memo[number] = result;
			}
		}
		return result;
	};
})();

function wordValue(word) {
	var alphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var value = 0, length = word.length;
	while (length--) {
		value += alphabet.indexOf(word[length]);
	}
	return value;
}

function countTriangleWords(words) {
	var len = words.length;
	var count = 0;
	while (len--) {
		if (isTriangleNumber(wordValue(words[len]))) {
			count++;
		}
	}
	return count;
}

var fs = require('fs');//Node
fs.readFile('words.txt', {
	encoding: 'UTF-8'
}, function(err, data){
	var words = data.replace(/"/g, '').split(',');
	console.log( countTriangleWords(words) );
});
