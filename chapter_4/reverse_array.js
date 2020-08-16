/*
    For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
    1) The first, reverseArray, takes an array as argument and produces a new array that has the same elements 
    in the inverse order. 
    
    2) The second, reverseArrayInPlace, does what the reverse method does, except it modifies the array given as an argument 
    by reversing its elements.

    Test Cases:
    console.log(reverseArray(["A", "B", "C"]));
    → ["C", "B", "A"];

    let arrayValue = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);
    → [5, 4, 3, 2, 1]
*/
// reverseArray: Take an array, produce a new array that has the elements in inverse order
function reverseArray(array) {
    let newArray = [];
    let n = array.length - 1;

    for(var i = n; i >= 0; i--) {
        newArray.push(array[i]);
    };
    return newArray;
};

let arrayOne = ["A", "B", "C"];

console.log(reverseArray(arrayOne));
// → ["C", "B", "A"];
console.log(arrayOne);
// → ["A", "B", "C"];   <~ unchanged


// reverseArrayInPlace: Take an array, and modify that same array so that it's contents are inversed.  Do not return a new array.
function reverseArrayInPlace(array) {
    let temporaryArray = [];

    while(array.length > 0) temporaryArray.push(array.pop());

    for(var i = 0; i < temporaryArray.length; i++) {
        array.push(temporaryArray[i]);
    };
    return array;
};

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]    <~ array is modified