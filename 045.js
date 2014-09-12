
// Triangle, pentagonal, and hexagonal numbers are generated by the following 
// formulae:

//   Triangle       T(n)=n(n+1)/2     1, 3, 6, 10, 15, ...
//   Pentagonal     P(n)=n(3n−1)/2    1, 5, 12, 22, 35, ...
//   Hexagonal      H(n)=n(2n−1)      1, 6, 15, 28, 45, ...

// It can be verified that T(285) = P(165) = H(143) = 40755.

// Find the next triangle number that is also pentagonal and hexagonal.

function isNumberInSeries(seriesFunc){
	var memos = [];
	var n = 1;
	return function(number) {
		var length = memos.length;
		if (number === memos[length-1]) return true;
		if (number < memos[length-1]) return (memos.indexOf(number) > -1);
		while (seriesFunc(n) < number) {
			memos.push( seriesFunc(n) );
			n++;
		}
		memos.push( seriesFunc(n) );
		return number === seriesFunc(n);
	};
}

function T(n) {
	return (n*(n+1))/2;
}

function P(n) {
	return (n*(3*n-1))/2;
}

function H(n) {
	return n*(2*n-1);
}

var isPentagonal = isNumberInSeries(P);

var isHexagonal = isNumberInSeries(H);

function findNextTPH(cnt) {
	while (!(isPentagonal( T(cnt) ) && isHexagonal( T(cnt) ))) {
		cnt++;
	}
	return T(cnt);
}

console.log( findNextTPH(286) );