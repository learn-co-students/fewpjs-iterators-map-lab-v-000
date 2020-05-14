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

function titleCased() {
   return tutorials.map(function (tutorial) {
     //split each sentence to individual letters of each sentence
      tutorial = tutorial.split(' ');
       //increment through each split sentence with the max the number of letters of each sentence
       for(var i = 0; i < tutorial.length; i++){
        tutorial[i]= tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1);
        //by index for each split sentence, for the first letter replace with upper case letter
      }
      //join the letters back to a sentence
    return tutorial.join(' ');
  });
}
