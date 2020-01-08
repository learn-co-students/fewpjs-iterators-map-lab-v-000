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

function titleCased() {
  return tutorials.map(function(tutorial) {
    let tutorialArr = tutorial.split(" ");
    for (let i = 0; i < tutorialArr.length; i++) {
      tutorialArr[i] = tutorialArr[i].charAt(0).toUpperCase() + tutorialArr[i].slice(1);
    }
    return tutorialArr.join(" ");
  })
}
