// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function(arr1, arr2) {
    const newArr = arr1.filter((num1) => {
      const a = arr2.find((num2) => {
        if(num1 === num2){
          return num1
        }
      })
      return a
    })
    return newArr
  };
