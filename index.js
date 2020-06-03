const tutorials = [
  "what does the this keyword mean?",
  "What is the Contutorialuctor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

/*
const titleCased = () => {
  var new_tutorials = []
  tutorials.map(function (element) {
    var words = element.split(" "); //splits each string into array of words
    new_words = words.map(function(word) {
      word[0].toUpperCase()
    })
  });
  //https://stackoverflow.com/questions/42755664/capitalize-first-letter-of-each-word-in-js
  return new_tutorials;
};

*/

function capitalize(string) {
  var words = string.split(" ");
  var new_words = [];
  for (var i = 0; i < words.length; i++) {
    var letters = words[i].split("");
    var new_letters = [];
    for (var j = 0; j < letters.length; j++) {
      if (j === 0) {
        //compare don't set
        new_letters.push(letters[j].toUpperCase()); //can't be i twice - Kat V
      } else {
        new_letters.push(letters[j]);
      }
    }
    new_words.push(new_letters.join("")); //we need to join new letters before pushing it into words
  }
  var new_string = new_words.join(" ");
  return new_string;
}

const titleCased = () => {
  var new_tutorials = tutorials.map(function (sentence) {
    return capitalize(sentence); //anonymous call back function
  });
  return new_tutorials;
};
