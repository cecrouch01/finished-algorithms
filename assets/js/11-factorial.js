// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    var factorialTotal = 1;
    for(var i =1; i<=num; i++) {
        factorialTotal = factorialTotal * i
    } return factorialTotal
};
