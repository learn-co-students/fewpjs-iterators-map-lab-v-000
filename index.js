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
  "what is JSONP?"
];
const titleCased = () => {
  return tutorials.map(function(string) {
    let words = string.split(" ");
    return words
      .map(function(word) {
        let start = word.slice(0, 1).toUpperCase();
        let finish = word.slice(1);
        let cappedWord = start + finish;
        return cappedWord;
      })
      .join(" ");
  });
};
