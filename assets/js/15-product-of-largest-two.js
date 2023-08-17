// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two
function compareNumbers(a, b) {
    return a - b
}

var productOfLargestTwo = function(arr) {
    const orderedArray = arr.sort(compareNumbers)
    const [a, b] = orderedArray.reverse()
    return a *
};


