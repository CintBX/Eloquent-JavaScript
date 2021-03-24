/*
  In this exercise you will alter the skipSpace() function, which the parser of your
  custom language uses to skip whitespaces in expressions. 

  Whenever it finds a hash(#) sign, it could treat the rest of the line as a comment
  and ignore it.

  Change skipSpace() to skip comments as if they are whitespaces, so that all the
  points where skipSpace() is called will now also skip comments.
*/

// Old version which ignores only whitespaces
function skipSpace(string) {
  let first = string.search(/\S/);
  if(first == -1) return "";
  return string.slice(first);
};

// Modified to ignore hashes as well
function skipSpaceUpdated(string) {
  let skippable = string.match(/^(\s|#.*)*/);
  return string.slice(skippable[0].length);
};