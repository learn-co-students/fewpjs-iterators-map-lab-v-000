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

function toTitleCase(x) {
  let y = x.split(' ')
  let z = []
  for (let b of y){
    b.toLowerCase()
    b = b[0].toUpperCase() + b.slice(1)
    z.push(b) 
  }
  return z.join(" ")
}

const titleCased = () => {
  return tutorials.map( tut => toTitleCase(tut))
}
