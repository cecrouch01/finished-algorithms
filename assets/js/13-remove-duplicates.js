// Write a function that takes in an array of integers and returns the array with duplicate values removed
function noDuplicates(num) {
    newArray =[]
    for (let i = 0; i < num.length; i++) {
      if(newArray.indexOf(num[i]) === -1) {
        newArray.push(num[i])
      }
    }
    return newArray
  }