/*
    Make the Group class from the previous exercise iterable. 
    Refer to the section about the iterator interface earlier in the chapter if you aren’t clear 
    on the exact form of the interface anymore.

    If you used an array to represent the group’s members,
    don’t just return the iterator created by calling the Symbol.iterator method on the array.
    That would work, but it defeats the purpose of this exercise.

    It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

class Group {
    constructor() {
        this.group = [];
    };
    add(value) {
        if(!this.group.includes(value)) return this.group.push(value);
    };
    delete(value) { 
        return this.group = this.group.filter(element => element != value);
    };
    has(value) {
        return this.group.includes(value)
    };
    static from(collection) {
        let newGroup = new Group;
        for(let element of collection) {
            newGroup.add(element);
        }
        return newGroup;
    };
};

// Create the GroupIterator class
class GroupIterator {
    constructor(group) {
        this.group = group;
        this.counter = 0; 
    }

    next() {
        if(this.counter == this.group.group.length) {
            return { done: true };
        } else {
            let result = { value: this.group.group[this.counter], done: false };
            this.counter++;
            return result;
        };
    };
};

// Set Group's Symbol.iterator symbol to be GroupIterator
Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
};

// test
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
};