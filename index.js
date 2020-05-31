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
//
// have to iterate over tutorials
// break each tutorial string into an array of strings
// capitalize each one


// function breakAndCap(arrayOfSentences){
//   // let wordArray = arrayOfSentences.split(" ")
//   let newArray = []
//   for (const sentence in arrayOfSentences) {
//     let words = sentence.split(" ")
//     words.forEach((word) => {
//       newArray.push(word.charAt(0).toUpperCase() + word.slice(1))
//     });
//
//   }
//   return newArray = newArray.join(" ")
// }
//
// i want to start with the tutorials array, then iterate over each title. i'll split
// each title, forming a new array of words. i'll capitalize each of those by looping over
// them, and then join them back together into one string. but i'm not sure
// how to do a nested iteration like that. A map within a map?
const titleCased = () => {
  return tutorials.map(function(tutorial){
    let splitSentence = tutorial.split(" ")
     let cappedSentence = splitSentence.map((word) => {
       return word.charAt(0).toUpperCase() + word.slice(1)
    });
    return cappedSentence.join(" ")
  })
    };


    // }
