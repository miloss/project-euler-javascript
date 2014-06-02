
// If p is the perimeter of a right angle triangle with integral length sides, 
// {a,b,c}, there are exactly three solutions for p = 120.

//   {20,48,52}, {24,45,51}, {30,40,50}

// For which value of p <= 1000, is the number of solutions maximised?

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

function tripletsMax(max) {
	var p, number, maxNumber = 0;
	for (var i = 12; i <= max; i++) {
		number = findTriplets(i).length;
		if (number > maxNumber) {
			maxNumber = number;
			p = i;
		}
	}
	return p;
}

console.log( tripletsMax(1000) );
