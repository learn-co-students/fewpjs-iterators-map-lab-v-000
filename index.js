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
  return tutorials.map(function(string){ // Map through array to get each string/element
    return string.split(' ').map(function(word){ //split string turning it into an array/ map through array to get each element
      return (word.charAt(0).toUpperCase() + word.slice(1)); //capitalize each char with at index 0 then add char to beginning of element
    }).join(' ');// join string back together 
  })
}
