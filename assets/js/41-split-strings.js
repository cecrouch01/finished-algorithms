// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
function solution(str){
    const arr = []
    for(let i = 0; i <str.length; i++) {
      if(i%2 === 0){
        const newStr = str.substr(i, 2)
        if(newStr.length === 1) {
          arr.push(newStr.concat("_"))
        } else {
          arr.push(newStr)
        }
      }
    }
    return arr
  }