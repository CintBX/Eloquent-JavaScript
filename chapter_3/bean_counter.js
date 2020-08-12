/*
  Bean Counter

  You can get the Nth character, or letter, from a string by writing
  "string"[N]. The returned value will be a string containing only 
  the character in position N.

  First character in a string: string[0]
  Last character in a string: string[string.length -1]

  Write a function countBs that takes a string as its only argument 
  and returns a number that indicates how many uppercase “B” 
  characters there are in the string.

  Next, write a function called countChar that behaves like countBs, 
  except it takes a second argument that indicates the character that 
  is to be counted (rather than counting only uppercase “B” 
  characters). Rewrite countBs to make use of this new function.
*/

// My solution
function countChar(string, letter) {
    let counter = 0;
    let result = 0;
    let lowercaseString = string.toLowerCase();

    while(counter < string.length) {
        lowercaseString[counter] == letter ? result++ : null;
        counter++;
    };

    return result;
};

function countBs(string) {
    return countChar(string, "b")
};

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));