/*
  Recursion
  Test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

  - Zero is even.

  - One is odd.

  - For any other number N, its evenness is the same as N - 2.

  Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

  Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

function isEven(number) {
    if(number == 0) return true;
    else if(number == 1) return false;
    else if(number < 0) return isEven(-number);
    else return isEven(number - 2);
};

  console.log(isEven(50));
  // The algo subtracts 2 from 50 a bunch of times.  if it's even, it'll eventually be 0 and return True
  console.log(isEven(75));
  // It also subtracts from 75, but if it's an odd number it'll eventually be 1, and return False
  console.log(isEven(-1));
  // The algo handles negative values by inverting them to positive (- number) and then performing the conditional