// Write code to return the array with all of the numbers in 'arr' reversed.
//You must return the return the origin array
// You may NOT use the built-in reverse method

const reverseInPlace = (arr) => {
    const reverseArr = []
    while(arr.length > 0){
      let lastNum = arr.pop();
      reverseArr.push(lastNum)
    }
    while(reverseArr.length > 0){
        let firstNum = reverseArr.shift();
        arr.push(firstNum);
    }
    return arr
};
