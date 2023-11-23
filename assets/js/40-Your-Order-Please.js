// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
    if(words === "") {
      return "";
    }
    const arr = words.split(' ');
    const newArr = [];
    let count = 1;
    while(count <= arr.length){
       for(let i = 0; i < arr.length; i++) {
         const check = arr[i].indexOf(count)
         if(check !== -1) {
           newArr.push(arr[i])
         }
       }
      count++
    }
    const string = newArr.join(' ')
    return string
  }