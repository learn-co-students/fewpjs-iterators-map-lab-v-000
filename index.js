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

const titleCased = () => tutorials.map(function(element) {
  let arr = element.split(" ")

   let str = arr.map(function(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  })
  return str.join(" ");
});

// with a loop
// const titleCased = () => tutorials.map(function(element) {
// let str = [];
//   for (const e of element.split(" ")){
//     str.push(e.charAt(0).toUpperCase() + e.slice(1));
//   };
//   return str.join(" ");
// });
