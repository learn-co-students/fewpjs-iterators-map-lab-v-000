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

const titleCasedAlt = (tutorials) => {
  return tutorials.map(function(sentance){
    return sentance.split(' ')
    .map(s => {
      return s[0].toUpperCase() + s.slice(1)
        }).join(' ')
    })
  }

// why can I invoke the function below without an argument i.e. titledCased() as code above i.e. titleCasedAlt(tutorials)? //  With above I have to call it as titledCased(tutorials) or else error is "Cannot read property 'map' of undefined at titleCasedAlt -> tutorials doesn't seem to be picked up


const titleCased =() => {
  return tutorials.map(function(sentance){
    return sentance.split(' ')
     .map(s => {
       return s[0].toUpperCase() + s.slice(1)
           }).join(' ')
      })
}
