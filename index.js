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

const titleCased = () => {
  const newTutorials = []
  tutorials.map(function (s) {
    const newString = s.split(' ').map((w) => {
      const newWord = w.charAt(0).toUpperCase() + w.slice(1)
      return newWord
    })
    newTutorials.push(newString.join(' '))
  })
  return newTutorials
}
