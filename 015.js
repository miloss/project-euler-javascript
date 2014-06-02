
// Starting in the top left corner of a 2×2 grid, and only being able to move to
// the right and down, there are exactly 6 routes to the bottom right corner.

// How many such routes are there through a 20×20 grid?

var latticePaths = function() {
	var SIZE = 20;
	var grid = Array(SIZE);
	for (var i = 0; i <= SIZE; i++) {
		grid[i] = Array(SIZE);
	}

	return function(x, y) {
		var paths = 0;
		if (x === 0 || y === 0) {
			return 1;
		}
		if (x > SIZE || y > SIZE) {
			return -1;
		}
		if (typeof grid[x][y] === 'number') {
			return grid[x][y];
		}
		paths = latticePaths(x-1, y) + latticePaths(x, y-1);
		grid[x][y] = paths;
		return paths;
	};
}();

console.log( latticePaths(20, 20) );
