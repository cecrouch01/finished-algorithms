// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
function findOdd(A) {
    const elementCounts = {};
    let answer = 0
    A.forEach((element,index) => {
      elementCounts[element] = (elementCounts[element] || 0) + 1;
      if(index === A.length - 1) {
        const keys = Object.keys(elementCounts)
        const values = Object.values(elementCounts)
        for(let i = 0; i < keys.length; i++){
          if(values[i]%2 === 1){
            answer = Number(keys[i])
          }
        }
      }
    });
    return answer
  };