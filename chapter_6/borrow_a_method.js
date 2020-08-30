// /*
//     Earlier in the chapter I mentioned that an object’s hasOwnProperty can be used as a more robust alternative 
//     to the in operator when you want to ignore the prototype’s properties. 
    
//     But what if your map needs to include the word "hasOwnProperty"? 
//     You won’t be able to call that method anymore because the object’s own property hides the method value.

//     Can you think of a way to call hasOwnProperty on an object that has its own property by that name?
// */

let map = {
    one: true,
    two: true,
    hasOwnProperty: true,
};

// console.log(hasOwnProperty("one"))
// Wrong! Needs to be fixed.  You no longer have access to Object.prototype.hasOwnProperty()

// No need to redefine hasOwnProperty, or to create a new one.
// Simply bypass the property "hasOwnProperty" and call the Object.prototype directly, via the call() method:
console.log( Object.prototype.hasOwnProperty.call(map, "one") );
// true

console.log( Object.prototype.hasOwnProperty.call(map, "two") );
// true

console.log( Object.prototype.hasOwnProperty.call(map, "hasOwnProperty") );
// true

console.log( Object.prototype.hasOwnProperty.call(map, "onee") );
// false