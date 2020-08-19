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


// 2) List to Array
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

function listToArray(list) {
    let result = [];

    for(let node = list; node; node = node.rest) {
        if(node) result.push(node.value);
    };
    return result;
};
console.log(listToArray(list));
// => [1, 2, 3]


// 3) Prepend a given value to the beginning of the list
function prepend(element, list) {
    list = {
        value: element,
        rest: list
    };
    return list;
};
console.log(prepend(0, list));
// => { value: 0, rest: { value: 1, rest: { value: 2, rest: { value: 3, rest: null }}}}


// 4) Find the nth value of the list.  If not found, return undefined
function nth(list, index) {
    let result = 0;
    let loopCounter = 0;

    for(let node = list; node; node = node.rest) {
        if(index == loopCounter) result = node.value;
        loopCounter++;
    };

    if(index < 0 || index > (loopCounter - 1)) return undefined;
    else return result;
};
console.log(nth(list, 2))
// => 3
console.log(nth(arrayToList(["A", "B", "C", "D", "E"]), 1))
// => B


// 5) Recursive Version of nth()
function recursiveNth(list, index) {
    let result;

    if(index < 0) return undefined;
    else if(index == 0) result = list.value;
    else if(!list.rest) return undefined;
    else return recursiveNth(list.rest, index-1);

    return result;
};
console.log(recursiveNth(list, -1))
// => undefined
console.log(recursiveNth(list, 0))
// => 1
console.log(recursiveNth(list, 1))
// => 2
console.log(recursiveNth(list, 2))
// => 3
console.log(recursiveNth(list, 3))
// => undefined