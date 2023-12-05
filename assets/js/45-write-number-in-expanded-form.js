// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// Expanded Form: Writing a number to show the value of each digit.

function expandedForm(num) {
    let str = ''
    const numStr = "" + num
    let expon = numStr.length - 1
    const arr = numStr.split('')
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] != 0) {
        if(i < 1) {
          arr[i] = arr[i] * (10**expon)
          str = str.concat(arr[i])
        }
        if(i > 0) {
          arr[i] = arr[i] * (10**expon)
          str = str.concat(' + ', arr[i])
        }     
      }
      expon--
    }
   return str
  }