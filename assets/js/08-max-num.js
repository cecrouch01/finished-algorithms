// Write code to return the largest number in the given array

var maxNum = function(arr) {
    var num = 0;
    for(i = 0; i < arr.length; i++) {
        if(arr[i]>num) {
            num = arr[i]
            
        }
    } return num;
};
