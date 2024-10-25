
// The number, 1406357289, is a 0 to 9 pandigital number because it is made up
// of each of the digits 0 to 9 in some order, but it also has a rather
// interesting sub-string divisibility property.

// Let d_1 be the 1st digit, d_2 be the 2nd digit, and so on. In this way, we
// note the following:

//   d_2d_3d_4 = 406 is divisible by 2
//   d_3d_4d_5 = 063 is divisible by 3
//   d_4d_5d_6 = 635 is divisible by 5
//   d_5d_6d_7 = 357 is divisible by 7
//   d_6d_7d_8 = 572 is divisible by 11
//   d_7d_8d_9 = 728 is divisible by 13
//   d_8d_9d_10 = 289 is divisible by 17

// Find the sum of all 0 to 9 pandigital numbers with this property

function sumPandigitals() {
    return findPandigitals().reduce((memo, num) => {
        memo += num;
        return memo;
    }, 0);
}

function findPandigitals() {
    const pandigitals = [];
    for (let d8910 = 17; d8910 < 1000; d8910 += 17) {
        const last = `${d8910 <= 99 ? '0' :''}${d8910}`.split('');
        const digits = getOtherDigits(last);
        if (digits.length !== 6) continue;

        for (let i = 0; i < 6; i++) {
            if (parseInt(`${digits[i]}${last[0]}${last[1]}`, 10) % 13 !== 0) continue;
            if (parseInt(`5${digits[i]}${last[0]}`, 10) % 11 !== 0) continue;

            for (let j = 0; j < 6; j++) {
                if (i === j) continue;
                if (parseInt(`${digits[j]}5${digits[i]}`, 10) % 7 !== 0) continue;

                for (let k = 0; k < 6; k++) {
                    if ([i, j].includes(k)) continue;
                    
                    for (let l = 0; l < 6; l++) {
                        if ([i, j, k].includes(l)) continue;
                        if (parseInt(`${digits[l]}${digits[k]}${digits[j]}`, 10) % 3 !== 0) continue;
                        if (['1', '3', '7', '9'].includes(digits[k])) continue;
                        
                        for (let m = 0; m < 6; m++) {
                            if ([i, j, k, l].includes(m)) continue;

                            const number = digits[m] + digits[l] + digits[k] + digits[j] + '5' + digits[i] + last.join('');
                            const first = getOtherDigits(number.split(''))[0];
                            pandigitals.push(parseInt(`${first}${number}`, 10));
                        }
                    }
                }
            }
        }
    }
    return pandigitals;
}

function getOtherDigits(digits) {
    // d6 must be 5
    return ['0', '1', '2', '3', '4', '6', '7', '8', '9'].filter(num => !digits.includes(num));
}


console.log( sumPandigitals() );
