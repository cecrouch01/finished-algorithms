// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string
var characterCount = function(str) {
    const charObj = {}
    for (let i = 0; i < str.length; i++){
      let char = str[i]
      if (charObj[char] === undefined) {
        charObj[char] = 1
      } else {
        charObj[char]++
      }
    }
    return charObj
};
