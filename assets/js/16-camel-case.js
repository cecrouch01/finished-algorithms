// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    const individualWords = str.split(' ')
    const camelCaseArray = []
	for(let i = 0; i < individualWords.length; i++){
        const firstLetter = individualWords[i].charAt(0)
    	if(i === 0) {
            const lowerCase = firstLetter.toLowerCase();
            const newWord = individualWords[i].replace(firstLetter, lowerCase)
            camelCaseArray.push(newWord)
        } else {
    	    const upperCase = firstLetter.toUpperCase();
            const replacedWord = individualWords[i].replace(firstLetter, upperCase)
            camelCaseArray.push(replacedWord)
        }
    }
    return camelCaseArray.join('')
};
