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

function titleCase(str){
  let strArr = str.split(' ');
  return strArr.map(word => {
    let firstChar = word.slice(0, 1).toUpperCase();
    let restOfWord = word.slice(1);
    return firstChar + restOfWord;
  }).join(' ');
}

function titleCased(){
  let done = tutorials.map(titleCase);
  return done;
};