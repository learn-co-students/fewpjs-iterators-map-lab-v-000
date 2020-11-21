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


function tutorialWords(tutorials) {
  let words = tutorials.map(tutorial => tutorial.split(" ")); 
  let capitalizedWords = [];
   capitalizedWords.push(words.map(function(word) { 
    return word.map(w => { 
      //let newWord = w[0].toUpperCase() + w.slice(1, w.length)
      //console.log("w:" + w + " newWord:" + newWord)
      return w[0].toUpperCase() + w.slice(1, w.length)
    })
   
   }));
    return capitalizedWords.map(c => {
      return c.map(a => {
      return a.join(" ");
    })
   })
  }

function titleCased() {
   const flattenedArray = [].concat(...tutorialWords(tutorials));
   return flattenedArray
}
