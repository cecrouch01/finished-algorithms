// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = (str) => {
    const arr = str.split('')
    const reverseArr = []
    while(arr.length > 0){
      let letter = arr.pop();
      reverseArr.push(letter)
    }
    const reverseStr = reverseArr.join('')
    return reverseStr
};
