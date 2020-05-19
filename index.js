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




const titleCased = () => tutorials.map(tutorial => tutorial.split(" ").map(
   word => word[0].toUpperCase() + word.slice(1)
).join(' ')
  
)
// Step 1, Sperate each words = 1st .map
  // step 2, get each letter in the words.. = 2nd .split
  //  step 3 .map over each letter in the word
//step 4, Capilazie the First letter in those words and 
 //step 5, Slice each word from the 1st letter in that word.
  // The Join it all back together. 

// Take it a step at a time 