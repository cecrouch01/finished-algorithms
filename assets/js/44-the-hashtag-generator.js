// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
    if (str === '') {
      return false;
    }
    console.log(str)
    const pattern = /(?:\s+|^)([a-z])/g;
    str = str.replace(pattern, function (match, group1) {
      return group1.toUpperCase();
    });
  
    const hashtag = '#' + str.replace(/\s+/g, ''); // Remove spaces
    if(hashtag === '#'){
      return false
    }
    if (hashtag.length <= 140) {
      return hashtag;
    }
    return false;
}