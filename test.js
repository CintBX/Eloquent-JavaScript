let SCRIPTS = [
    {
        name: "Coptic", //mid
        ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
        direction: "ltr",
        year: -200,
        living: false,
        link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
    },
    {
        name: "Latin", //less
        ranges: [[600, 900], [800, 1508], [1203, 1720]],
        direction: "ttb",
        year: -200,
        living: false,
        link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
    },
    {
        name: "Han", //most
        ranges: [[2000, 5000], [13400, 12500], [10513, 14520]],
        direction: "rtl",
        year: -200,
        living: false,
        link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
    },
]


function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    })
}

// console.log(SCRIPTS.reduce((a, b) => {
//     return characterCount(a) < characterCount(b) ? b : a;
// }))

let biggest = null;
for(let script of SCRIPTS) {
    if(biggest == null || characterCount(biggest) < characterCount(script)) {
        biggest = script;
    }
}

// console.log(biggest);

function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

// // Average year of living scripts
// console.log(Math.round(average(
//     SCRIPTS.filter(s => s.living).map(s => s.year)
// )))

// // Average of dead scripts
// console.log(Math.round(average(
//     SCRIPTS.filter(s => !s.living).map(s => s.year)
// )))


// To Review
//Filter
// returns only the array elements that pass a test.  In the previous case, it filters out and returns the elements/scripts that have
// living == true

//Map
// Transforms an array by applying a function to each element, and builds a new array from the returned values
// New array will have same length as the input array, but the contents will be `mapped`, every element altered, by the function you
// placed to map() 
// In this previous case, you simply made a call to the `year` property of each element with map.  Returning it.

function characterScript(code) {
    for(let script of SCRIPTS) {
        if(script.ranges.some(([from, to]) => {
            return code >= from && code <= to;
        })) {
            return script;
        }
    }
    return null;
}

// console.log(characterScript(12031))

/*
    Some() method
    Takes a test function, and tells you if it returns true or not for each element in tthe array
    In this previous case, you're selecting each script.ranges property, and using some() to access the array of each ranges value
    [from, to], and then setting a scenario where, if the code is greater than or equal to the lowest, AND less than/equal to the highest, 
    it will return "true", then you return that script (or you could even return script.name, but in this case you just return the whole 
    script object)

    If that condition, given the number you passed to `code` param, turns out False, you will not return that script and instead will return 
    null.
*/


const ayy = [2, 3, 5, 7, 9];
function isEven(number) {
    return number % 2 == 0;
};

// console.log(ayy.some(i => isEven(i)))

function repeat(n, action) {
    for(var i = 0; i < n; i++) {
        action(i);
    };
};

repeat(5, X => {
    console.log(`Unit: ${X+1}`);
});