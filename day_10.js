console.log("Day 10");

let array = [
    {field: "id", operator: "eq"},
    {field: "cStatus", operator: "eq"},
    {field: "money", operator: "eq"},
];

const filterField = "fg"

function removeArrayElement(filterField) {
    // write your code here
    var arr = array.filter(function(item) {
        return item.field !== filterField;
    });
    return arr;
}


console.log(`filtered array: ${removeArrayElement(filterField)}`);