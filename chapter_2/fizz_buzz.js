/* 
	Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
  For numbers divisible by 3, print "Fizz" instead of the number 
  For numbers divisible by 5 (and not 3), print "Buzz" instead.

  When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 
  (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

// Dumb way
function fizzBuzz(start, end) {
	for(var counter = 0; counter < end; counter++) {
		if(start % 3 == 0 && start % 5 != 0) { // fizz
			console.log("Fizz");
			start++;
		} else if (start % 3 != 0 && start % 5 == 0) { // buzz
			console.log("Buzz");
			start++;
		} else if (start % 3 == 0 && start % 5 == 0) { // fizzbuzz
			console.log("FizzBuzz");
			start++;
		} else {
			console.log(start);
			start++;
		};
	};
};
fizzBuzz(1, 100);

// Smart way
for(var n = 1; n <= 100; n++) {
	let output = "";
	if(n % 3 == 0) output += "Fizz";
	if(n % 5 == 0) output += "Buzz";
	console.log(output || n);
};