/*
    1) Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.

    2) Also write a listToArray function that produces an array from a list.

    3) Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element 
    to the front of the input list.
    
    4) Helper function nth, which takes a list and a number and returns the element at the given position in the list 
    (with zero referring to the first element) or undefined when there is no such element.

    5) Also write a recursive version of nth.
*/

// 1) Array To List
let array = [10, 20, 30];

function arrayToList(arr) {
    let list = null;
    let n = arr.length - 1;

    for(var i = n; i >= 0; i--) {
        list = { value: arr[i], rest: list };
    };

    return list;

};

console.log(arrayToList(array));
// => { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }