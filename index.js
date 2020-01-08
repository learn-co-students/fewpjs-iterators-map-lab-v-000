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
/*
function capitalize(tutorial) {
  return tutorial.charAt(0).toUpperCase() + tutorial.slice(1);
}

const titleCased = () => {
  tutorials.map(capitalize);
}
*/

function capitalizeWords(str) {
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.slice(1);});
}

function titleCased() {
  return tutorials.map(capitalizeWords);
}
