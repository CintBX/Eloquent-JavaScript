/*
  In this chapter, you created your own programming language called Egg.

  In this exercise, add support for arrays to Egg by adding the following
  three functions to the top scope:
  - array(...values)  => construct an array containing the argument values
  - length(array)     => get an array's length
  - element(array, n) => fetch the nth element from an array
*/

const topScope = Object.create(null);

topScope.array = (...values) => values;
console.log(topScope.array(1, 2, 3, 4));
// => [1, 2, 3, 4]

topScope.length = array => array.length;
console.log(topScope.length(["a", "b", "c"]));
// => 3

topScope.element = (array, n) => array[n];
console.log(topScope.element(["a", "b", "c", "d", "e"], 3));
// => d