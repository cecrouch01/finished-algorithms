// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    var vowels = "aeiouAEIOU"
    var vowelNum = 0
    for(i = 0; i < str.length; i++) {
        if (vowels.match(str.charAt(i)) == str.charAt(i)) {
            vowelNum += 1;
        }
    } return vowelNum;
};
