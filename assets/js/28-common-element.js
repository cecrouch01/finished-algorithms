// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

var commonElement = function(arrA, arrB) {
    const number = arrA.filter((num) => {
        for(let i = 0; i < arrB.length; i++){
          if(num === arrB[i]){
            return num
          }
        }
      })
      if(number[0]=== undefined) {
        return 0
      }
      return number[0]
};
