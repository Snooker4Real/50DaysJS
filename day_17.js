console.log("Day 17");

/**
 *
 * @param {number[]} inputArray Array of numbers
 */
const longestConsecutiveSequence = (inputArray) => {
    // Your code here
    let sortedArr = inputArray.sort((a, b) => a - b);
    let currSeq = 0;
    let maxSeq = 0;
    mySet = new Set([...sortedArr]);
    sortedArr = [...mySet];
    if (sortedArr.length === 0) {
        return 0;
    }
    for (let i = 0; i<sortedArr.length-1;i++){
        if (sortedArr[i+1] - sortedArr[i] === 1){
            currSeq++;
            maxSeq = Math.max(maxSeq, currSeq);
        } else {
            currSeq = 0;
        }
    }
    return maxSeq+1;
}
