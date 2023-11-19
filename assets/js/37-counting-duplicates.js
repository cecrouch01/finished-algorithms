// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
function duplicateCount(text){
    const count = [];
    const arr = text.toLowerCase().split('');
    for(let i = 0; i < arr.length; i++) {
      const countCheck = count.includes(arr[i])
      const arrCheck = arr.includes(arr[i], i + 1)
      if(countCheck === false && arrCheck === true) {
        count.push(arr[i])
      }
    }
     return count.length
   }