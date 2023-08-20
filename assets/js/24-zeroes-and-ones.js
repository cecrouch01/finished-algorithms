// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function(str) {
    let array = str.split('')
    let ones = array.filter((num) => {
      return num === '1'
    })
    let zeros = array.filter((num) => {
      return num ==='0'
    })
  if(zeros.length === ones.length){
    return true
  } else {
    return false
  }
};
