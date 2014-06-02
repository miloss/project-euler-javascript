
// If the numbers 1 to 5 are written out in words: one, two, three, four, five,
// then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out 
// in words, how many letters would be used?

// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and 
// forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 
// letters. The use of "and" when writing out numbers is in compliance with 
// British usage.

function numberToWords(num) {
	var NUM2TEXT = {
		ones: ['','one','two','three','four','five','six','seven','eight','nine'],
		tens: ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'],
		teens: ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
	};
	var tens = function(num) {
		if (num < 10) {
			return NUM2TEXT.ones[num];
		} else if (num >= 10 && num < 20) {
			return NUM2TEXT.teens[num-10];
		} else {
			return NUM2TEXT.tens[Math.floor(num/10)] + ' ' + NUM2TEXT.ones[num%10];
		}
	};
	var hundreds = function(num) {
		if (num > 99) {
			return NUM2TEXT.ones[Math.floor(num/100)] + ' hundred ' + 
				(num%100 === 0 ? '' : 'and ') + tens(num%100);
		} else {
			return tens(num);
		}
	};
	if (num === 1000) {
		return 'one thousand';
	} else {
		return hundreds(num);
	}
}

function countLetters(num) {
	var sum = 0;
	for (var i = 1; i <= num; i++) {
		sum += numberToWords(i).replace(/ /g, '').length;
	}
	return sum;
}

console.log( countLetters(1000) );
