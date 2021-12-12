console.log("Day 3");
const num = 3849;

function reverseGivenInteger(num) {
    // write your solution here
    let r = num.toString().split('').reverse().join('');
    return Math.sign(num) * parseInt(r);

}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);
