// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function(str, sub) {
    let set = new Set();
    const strArr = str.split('')
    const subArr = sub.split('')
    const arr = []
    for(let i = 0; i < strArr.length; i++) {
        const num = strArr[i];
        set.add(num);
    }
    for(let i = 0; i < subArr.length; i++){
        const num = subArr[i];
        if(set.has(num) === true) {
        arr.push(num)
        }
    }
    if(arr.length === sub.length) {
        return true
    }
    return false
};
