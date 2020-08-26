/*
    Implement every as a function that takes an array and a predicate function as parameters.
    Write two versions, one using a loop and one using the some method.
*/

// Loop version
function every1(array, test) {
    for(let element of array) {
        if(!test(element)) return false;
    }
    return true;
};

// Some() version
function every2(array, test) {
    return !array.some(e => !test(e));
};

console.log(every1([1, 3, 5], n => n < 10));
console.log(every2([1, 3, 5], n => n < 10));
// → true

console.log(every1([2, 4, 16], n => n < 10));
console.log(every2([2, 4, 16], n => n < 10));
// → false

console.log(every1([], n => n < 10));
console.log(every2([], n => n < 10));
// → true