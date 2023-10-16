// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

const validBrackets = function(str) {
    const strNoSpace = str.replaceAll(' ', '');
    const arr = strNoSpace.split('');
    const leftBracket = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '(' || arr[i] === '{' || arr[i] === '[') {
        leftBracket.push(arr[i]);
        } else 
        if(arr[i] === ')' && leftBracket.length !== 0 && leftBracket[leftBracket.length-1] === '(' ) {
        leftBracket.pop();
        } else
        if(arr[i] === ']' && leftBracket.length !== 0 && leftBracket[leftBracket.length-1] === '[' ) {
            leftBracket.pop();
        } else
        if(arr[i] === '}' && leftBracket.length !== 0 && leftBracket[leftBracket.length-1] === '{' ) {
            leftBracket.pop();
        } else {
            return false
        }
    }
    return true
  };

