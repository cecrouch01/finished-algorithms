// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

var sortedSquares = function(arr) {
    let squaredArray = arr.map((num) => {
        return Math.pow(num, 2)
    });
    return squaredArray.sort((a,b) => a - b)
};
