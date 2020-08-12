/*
    Write a function that takes two parameters and returns the minimum value (numbers)
    It should mimic Math.min()
*/

function min(a, b) {
    if(a > b) return b;
    else return a;
};

console.log(min(0, 10));
// 0

console.log(min(0, -10));
// -10