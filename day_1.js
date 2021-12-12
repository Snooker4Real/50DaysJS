console.log("Day 1");

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
    // write your solution here
    let rdmNumber = Math.round(Math.random() * (rangeEnd - rangeStart) + rangeStart);

    return rdmNumber;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)