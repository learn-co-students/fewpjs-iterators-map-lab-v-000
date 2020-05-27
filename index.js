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

// ORIGINAL TEMPLATE PROVIDED
// const titleCased = () => {
//   return tutorials
// }

const titleCased = () => {
  // Iterate over the tutorials array using map saving to tutorial function
  return tutorials.map(tutorial => {
    // Seperate each word in the tutorial title saved as words variable
    let words = tutorial.split(" ")
      // Iterate over each word in the tutorial title
      for (let i = 0; i < words.length; i++) {
        // set words[i] to capitalize the first letter of each word
        // then add the remainer of each word (lowercase)
        words[i] = (words[i][0].toUpperCase() + words[i].slice(1))
      }
      // join each word in the tutorial title with a space between each word
      return words.join(" ")
  })
}
    