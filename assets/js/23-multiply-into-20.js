const multiplyInto20 = function(arr) {
  let result;
  arr.forEach((num) => {
    for(let i = 0; i < arr.length; i++){
      if(num * arr[i] === 20){
        result = true
      }
    }
  })
  if(result === true){
    return true
  } else {
    return false
  }
};
