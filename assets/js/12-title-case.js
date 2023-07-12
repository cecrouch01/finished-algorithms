// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized
var titleCase = function(str) {
    var indivWord = str.split(" ")
    for(var i = 0; i < indivWord.length; i++) {
    indivWord[i] = indivWord[i][0].toUpperCase() + indivWord[i].substring(1)
  }
  return indivWord.join(" ")
};
