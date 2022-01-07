function mostFreq(arr) {
    // write your code here
    let maxCount = 0;
    let mapArray = new Map();
    const unique = arr.filter((ele, index) => arr.indexOf(ele) === index);

    for (let i = 0; i < unique.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (unique[i] === arr[j]) {
                count++;
            }
        }
        if (count > 1) {
            maxCount = Math.max(maxCount, count);
            mapArray.set(unique[i], count);
        }
    }
    const result = [...mapArray.entries()].reduce((a, e) => e[1] > a[1] ? e : a);
    return result.join(' ');
}

const arr = [1, 2, 2, 4, 5, 6, 6];

console.log(mostFreq(arr));