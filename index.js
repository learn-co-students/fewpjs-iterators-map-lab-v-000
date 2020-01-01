const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

const titleCased = () => {
  // return tutorials
  // word[0] === word[0].toUpperCase()
  return tutorials.map(function (tutorial) {
    // return tutorial = tutorial.charAt(0).toUpperCase() + tutorial.slice(1);
    // test wants every word to be uppercase. .split can break the string into each word, and then .join back into one string
    tutorial = tutorial.split(' ');
    for (let i = 0; i < tutorial.length; i++) {
      tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1);
    }
    return tutorial.join(' ');
  })
}