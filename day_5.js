console.log("Day 5");

const str = 'XeroX';

function getTheGapX(str) {
    // write your solution here
    if (str.lastIndexOf('X')==-1 && str.indexOf('X')==-1)
        return -1;
    else
        return str.lastIndexOf('X')-str.indexOf('X');
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)
