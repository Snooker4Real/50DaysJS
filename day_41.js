function openOrSenior(data) {
    // your code goes below
    return data.map((member) => {
        return member[0] >= 55 && member[1] > 7 ? 'Senior' : 'Open';
    })
}

let output = openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
]);

console.log(output);
