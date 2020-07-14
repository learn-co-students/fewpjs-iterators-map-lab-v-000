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

const capitlizeString = (string) => {
  let r = []
  let strA = string.split(' ')
  for (let i = 0; i < strA.length; i++){
    r.push(strA[i].charAt(0).toUpperCase() + strA[i].slice(1));
  }
  return r.join(' ');
};

function titleCased(){
  return tutorials.map(e => capitlizeString(e))
};