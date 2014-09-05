
// Starting with the number 1 and moving to the right in a clockwise direction 
// a 5 by 5 spiral is formed as follows:

//   21 22 23 24 25
//   20  7  8  9 10
//   19  6  1  2 11
//   18  5  4  3 12
//   17 16 15 14 13

// It can be verified that the sum of the numbers on the diagonals is 101.

// What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral 
// formed in the same way?

function diagonalsSum(size) {
	var sum = 1;
	var diagonal;
	while (size > 1) {
		diagonal = 4;
		while (diagonal--) {
			sum += size*size - (size-1)*diagonal;// Numbers on diagonal
		}
		size -= 2;
	}
	return sum;
};

console.log( diagonalsSum(1001) );
