console.log("Day 1")

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
    // write your solution here
    rdmNumber = Math.round(Math.random() * (rangeEnd - rangeStart) + rangeStart);

    return rdmNumber;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)


console.log("Day 2")

const str = "JavaScript is awesome"

function reverseAString(str) {
    // write your solution here

    return str.split("").reverse().join("");
}

console.log(`Reversed string is: ${reverseAString(str)}`)


console.log("Day 3")
const num = 3849;

function reverseGivenInteger(num) {
    // write your solution here
    let r = num.toString().split('').reverse().join('');
    return Math.sign(num) * parseInt(r);

}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)

console.log("Day 4")