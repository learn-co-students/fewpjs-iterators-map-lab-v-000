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

let titleCased = () => {
  let result = tutorials.map(tutorial => makeTitleCase(tutorial)) 
  
  return result
}

let makeTitleCase = (tutorial) => {
  // let lowerCase = tutorial.toLowerCase();
  let eachWord = tutorial.split(' ');
  let final = eachWord.map(word => word.replace(word[0], word[0].toUpperCase()));
  return final.join(' ')
}

