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

function capitalizeWord(word) { // 'word' becomes 'Word'
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

const titleCased = () => {
  // Ex (for ONE tutorial): "this Is a sentence" becomes "This Is A Sentence"
  return tutorials.map(
    tutorial => tutorial.split(" ").map(capitalizeWord).join(" ")
  );
}

// Test code:

// let testStr = "i want to capitalize these words";
// undefined
// let splitStr = testStr.split(' ');
// undefined
// splitStr;
// (6) ["i", "want", "to", "capitalize", "these", "words"]
// splitStr[1][0]
// "w"
// splitStr[1][0].toUpperCase;
// ƒ toUpperCase() { [native code] }
// splitStr[1][0].toUpperCase();
// "W"
// splitStr;
// (6) ["i", "want", "to", "capitalize", "these", "words"]
// splitStr[1].charAt(0);
// "w"
// splitStr.map(word => word[0].toUpperCase);
// (6) [ƒ, ƒ, ƒ, ƒ, ƒ, ƒ]
// splitStr.map(word => word[0].toUpperCase());
// (6) ["I", "W", "T", "C", "T", "W"]
// splitStr.map(function(word) {
//     word[0] = word[0].toUpperCase();
//     return word;
// })
// (6) ["i", "want", "to", "capitalize", "these", "words"]
// splitStr.map(function(word) {
//     return word[0].replace(word[0].toUpperCase());
// })
// (6) ["i", "w", "t", "c", "t", "w"]