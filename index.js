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


const capitalizeWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const capitalizeSentence = (sentence) => {
  sentence = sentence.split(' ');
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = capitalizeWord(sentence[i])
  }
  return sentence.join(' ');
}

function titleCased() { return tutorials.map(tutorial => capitalizeSentence(tutorial))}
