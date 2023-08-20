// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch2D = function(arr) {
    let num = 0
    for(let i = 0; i < arr.length; i++){
        let singleArray = arr[i].filter((letter) => {
        return letter === 'X'
        })
        num += singleArray.length
    }
    return num
};
