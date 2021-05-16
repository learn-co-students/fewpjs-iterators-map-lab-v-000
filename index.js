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

// yo, this was confusing! I see now from the test this WAS
// supposed to return a function not an array to titleCased,
// used solution to confirm
const titleCased = () => {
  return tutorials.map(function(tutorial) {
    let tutorialItems = tutorial.split(" ");
    let tutorialRevised = [];
    
    for (const item of tutorialItems) {
      tutorialRevised.push(`${item.split("")[0].toUpperCase()}${item.split("").slice(1).join("")}`);
    }
  
    return tutorialRevised.join(" ");
  })
  // returned my own and commented out the below
  // return tutorials
}

