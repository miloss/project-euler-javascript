
// A Pythagorean triplet is a set of three natural numbers, a < b < c, 
// for which,
//   a^2 + b^2 = c^2

// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

function findTriplets(sum) {
	var triplets = [];
	var max = Math.ceil( sum/2 );
	var a, b, c;
	for (a = 3; a < max; a++) {
		for (b = a+1; b < max; b++) {
			if (Math.pow(sum-b-a, 2) === (Math.pow(a, 2) + Math.pow(b, 2))) {
				triplets.push( [a, b, sum-b-a] );
			}
		}
	}
	return triplets;
}

console.log( findTriplets(1000) );
