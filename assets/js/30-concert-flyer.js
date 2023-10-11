// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

var concertFlyer = function (magazine, flyer) {
    const element = new Set();
    const magArr = magazine.split(' ');
    const flyArr = flyer.split(' ');
    for(let i = 0; i < magArr.length; i++) {
      element.add(magArr[i])
    }
    
    for(let i = 0; i < flyArr.length; i++) {
      if(!element.has(flyArr[i])) {
        return false;
      }
    }
    return true;
};
