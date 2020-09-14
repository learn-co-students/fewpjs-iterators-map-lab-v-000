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

// const titleCased = () => {
//   return tutorials
// }

function titleCased() {
  // or return tutorials.map(function (tutorial) {
  return tutorials.map(tutorial => {
    // splits each string on the spaces so we can identify first characters
    tutorial = tutorial.split(' ');
    for (var i = 0; i < tutorial.length; i++) {
      // loops through the now split strings, identifies the first character of each, converts first character toUpperCase() and then slices back together with rest of section
      tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1)
    }
    // joins back fragmented strings;
    return tutorial.join(' ');
  })
}
