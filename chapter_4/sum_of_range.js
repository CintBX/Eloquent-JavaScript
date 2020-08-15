/*
    1) Write a range function that takes two arguments, start and end, and returns an array 
    containing all the numbers from start up to (and including) end.

    2) Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
    Run the example program and see whether it does indeed return 55.

    3) As a bonus assignment, modify your range function to take an optional third argument that indicates 
    the “step” value used when building the array. If no step is given, the elements go up by increments of one, 
    corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
    Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].


    Console.log tests:

    console.log(range(1, 10));
    => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    console.log(range(5, 2, -1));
    => [5, 4, 3, 2]

    console.log(sum(range(1, 10)));
    => 55
*/

// First
function range(start, end) {
    let result = [];
    
    for(var i = start; i <= end; i++) {
        result.push(i);
    };

    return result;
};

// Second
function sum(numbers) {
    let result = 0;

    for(let number of numbers) {
        result += number;
    };

    return result;
};

// Third: Doesn't account for all scenarios
function updatedRange(start, end, step) {
    let result = [];

    if(start < end) {
        for(var i = start; i <= end; step ? i += step : i++) {
            result.push(i);
        };
    } else if (start > end) {
        for(var i = start; i >= end; step ? i += step : i--) {
            result.push(i);
        };
    };

    return result;
};

// console.log(updatedRange(1, 10));
// console.log(updatedRange(5, 2, -1));
// console.log(sum(range(1, 10)));


// UPDATE: range() that accounts for all scenarios (positive step, negative step, no step included for both types of ranges)
function finalRange(start, end, step = 1) {
    let result = [];

    if(start < end) {
      if(step < 0) step = -step;
      for(var i = start; i <= end; i += step) {
          result.push(i);
      };
    } else if(start > end) {
      if(step > 0) step = -step;
      for(var i = start; i >= end; i += step) {
        result.push(i);
      };
    };
    return result;
};

// Start->End
console.log(finalRange(1, 10));
// =>  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(finalRange(1, 10, 2));
// =>  [1, 3, 5, 7, 9]
console.log(finalRange(1, 10, -2));
// =>  [1, 3, 5, 7, 9]


// End->Start
console.log(finalRange(10, 1))
// => [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(finalRange(10, 1, 2))
// => [10, 8, 6, 4, 2]
console.log(finalRange(10, 1, -2));
// => [10, 8, 6, 4, 2]