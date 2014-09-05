
// The cube, 41063625 (345^3), can be permuted to produce two other cubes: 
// 56623104 (384^3) and 66430125 (405^3). In fact, 41063625 is the smallest 
// cube which has exactly three permutations of its digits which are also cube.

// Find the smallest cube for which exactly five permutations of its digits are 
// cube.

function isPermutationCube(num, n) {
	var cube = Math.pow(n, 3);
	var cube_digits = (cube+'').split('').sort().join('');
	var max = Math.ceil( Math.pow(Math.pow(10, cube_digits.length), 1/3) );
	var no_permutes = 0;
	for (var min = n + 1; min < max; min++) {
		if ((Math.pow(min, 3)+'').split('').sort().join('') === cube_digits) {
			no_permutes++;
		}
	}
	return no_permutes === (num-1);
}

function minPermutationsCube(num) {
	var n = 0;
	while (!isPermutationCube(num, n)) n++;
	return Math.pow(n, 3);
};

console.log( minPermutationsCube(5) );
