// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    let objectSet = new Set();
    for(let i = 0; i < arr.length; i++) {
        objectSet.add(arr[i]);
    }
    const arraySet = Array.from(objectSet)
    if (arraySet.length == arr.length) {
        return true
    } else {
        return false
    }
};
