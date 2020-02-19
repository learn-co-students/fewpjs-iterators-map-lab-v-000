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
  let t = tutorials.map( s => {
    let ws = s.split(" ");
    let S = [];
    for(const w of ws){
      S.push(w.slice(0,1).toUpperCase() + w.slice(1));
    }
    return S.join(" ");
  })
  return t;
};
