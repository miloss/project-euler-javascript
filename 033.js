
// The fraction 49/98 is a curious fraction, as an inexperienced mathematician 
// in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which
// is correct, is obtained by cancelling the 9s.

// We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

// There are exactly four non-trivial examples of this type of fraction, less 
// than one in value, and containing two digits in the numerator and 
// denominator.

// If the product of these four fractions is given in its lowest common terms, 
// find the value of the denominator.

function isCurious(n, d) {
	if (n%10 !== Math.floor(d/10)) return false;
	return (n * (d%10)) === (d * Math.floor(n/10));
}

function findCuriousFractions(min, max) {
	var fractions = [];
	var i, j;
	for (i = min; i <= max; i++) {
		if (i%10 === 0 || i%11 === 0) continue;
		for (j = min; j <= max; j++) {
			if (j === i || j%10 === 0 || j%11 === 0) continue;
			if (isCurious(i, j)) {
				fractions.push( [i, j] );
			}
		}
	}
	return fractions;
}

console.log( findCuriousFractions(10, 99) );
