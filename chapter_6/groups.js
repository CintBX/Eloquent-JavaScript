/*
    Write a class called Group (since Set is already taken). 
    Like Set, it has add, delete, and has methods. 
    Its constructor creates an empty group, 
    add adds a value to the group (but only if it isn’t already a member), 
    delete removes its argument from the group (if it was a member),
    and has returns a Boolean value indicating whether its argument is a member of the group.

   Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

   Give the class a static from method that takes an iterable object as argument and creates a group 
   that contains all the values produced by iterating over it.
*/

class Group {
    constructor() {
        // creates an empty group
        this.group = [];
    };

    add(value) { //good
        // adds a value to the group UNLESS the group already has that value
        if(!this.group.includes(value)) return this.group.push(value);
    }

    delete(value) { 
        // removes the argument/value from the group if it is a member of the group
        return this.group = this.group.filter(element => element != value);
    }

    has(value) { //good
        // returns a Boolean, indicating whether the param is a member of the group
        return this.group.includes(value)
    }

    static from(collection) {
        // takes an iterable object, and creates a group that contains all the values produced by iterating over the object.
        let newGroup = new Group;
        for(let element of collection) {
            newGroup.add(element);
        }
        return newGroup;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false