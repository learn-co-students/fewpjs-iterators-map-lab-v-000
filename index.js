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


//function capPhrase(sentance) {
//  return phrase.split(' ').map(function(word) {
//    word.toUpperCase()
//  }).join(' ')
//}

const titleCased = () => {
  return tutorials.map(function(sentance) {
    //debugger
    return sentance.split(' ').map((s) => s.charAt(0).toUpperCase() + s.slice(1)
  ).join(' ');
})}



//const titleCased = tutorials.map(capPhrase(phrase))
