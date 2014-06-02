
// You are given the following information, but you may prefer to do some 
// research for yourself.
// 
//   * 1 Jan 1900 was a Monday.

//   * Thirty days has September,
//     April, June and November.
//     All the rest have thirty-one,
//     Saving February alone,
//     Which has twenty-eight, rain or shine.
//     And on leap years, twenty-nine.

//   * A leap year occurs on any year evenly divisible by 4, but not on a 
// century unless it is divisible by 400.
// 
// How many Sundays fell on the first of the month during the twentieth century 
// (1 Jan 1901 to 31 Dec 2000)?

function monthdays(month, year) {
	switch (month) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			return 31;
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			return 30;
			break;
		case 2:
			return (year%4 === 0 && (year%100 !== 0 || year%400 === 0)) ? 29 : 28;
			break;
		default:
			break;
	}
}

function howManySundays(startYear, endYear) {
	var sundays = 0;
	var day = 1;// 1 Jan 1900
	for (var y = 1900; y <= endYear; y++) {
		for (var m = 1; m <= 12; m++) {
			day = (day + monthdays(m, y) - 1)%7 + 1;
			if (y < startYear) continue;
			if (day === 7) {
				sundays++;
			}			
		}
	}
	return sundays;
}

console.log( howManySundays(1901, 2000) );
