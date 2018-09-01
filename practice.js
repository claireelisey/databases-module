// create a function that takes an array of strings
// and returns the longest string in the array


var animals = ['jaguar', 'elephant', 'mustang']

function longestString (arr) {
    var lgth = 0;
    var longest;
    for (let i=0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            lgth = arr[i].length;
            longest = arr[i];
        }
    }
    return longest;
}

longestString(animals);