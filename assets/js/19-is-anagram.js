// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
    let arrayStrA = strA.split('').sort().join('')
    let arrayStrB = strB.split('').sort().join('')
    if(arrayStrA === arrayStrB){
        return true
    } else {
        return false
    }
};