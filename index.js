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
  return tutorials.map(tutorial => {
    let eachWord = tutorial.split(' ')
    // console.log("each word:", eachWord)

    let capitalize = eachWord.map(word => word.replace(word[0], word[0].toUpperCase()))
    // console.log('capitalize:', capitalize)

    let finishedTitle = capitalize.join(' ')
    console.log('finishedTitle:', finishedTitle)
      return finishedTitle
  })
}
