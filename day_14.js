console.log("Day 14");

/**
 *
 * @param {number[]} digits Array of valid digits of baseA
 * @param {number} baseA base a
 * @param {number} baseB base b in which digits are to be converted
 * @returns {number[]} Array of valid digits of baseB
 */
const convertToInitialBase = (digits, baseA) => {
    return parseInt(digits.join('', baseA))
}
const convertToFinalBase = (digit, baseB) => {
    return digit.toString(baseB);
}
const convertDigitsToAskedBase = (digits, baseA, baseB) => {
	// Your code here
    let num = convertToInitialBase(digits, baseA);
    num = convertToFinalBase(num, baseB);
    num = num.split('');
	for (let i = 0; i < num.length; i++) {
        if (num[i] == 'a') num[i] = 10;
        else if (num[i] == 'b') num[i] = 10;
        else if (num[i] == 'b') num[i] = 11;
        else if (num[i] == 'c') num[i] = 12;
        else if (num[i] == 'd') num[i] = 13;
        else if (num[i] == 'e') num[i] = 14;
        else if (num[i] == 'f') num[i] = 15;
        else num[i] = parseInt(num[i]);
    }
    return num;
}
