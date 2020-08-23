/*
    Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array
    that has all the elements of the original arrays.
*/

let arrays = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9, 10]
];

// First way: function
function flatten(arrays) {
    return arrays.reduce((a, b) => {
        return a.concat(b);
    });
};
console.log(flatten(arrays));

// Second way: inside the console log
console.log(arrays.reduce((a, b) => a.concat(b)));