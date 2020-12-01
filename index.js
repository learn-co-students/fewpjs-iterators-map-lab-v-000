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
  let tutorialsSplit = tutorials.map(function(tutorial) {
    return tutorial.split(' ')
  })
  let eachLineCapped = tutorialsSplit.map(function(line) {
    return line.map(function(word) {
      return word[0].toUpperCase()+(word.split('').splice(1).join(''))})
    })
  return eachLineCapped.map(function(row) {
    return row.join(' ')
  })
}





