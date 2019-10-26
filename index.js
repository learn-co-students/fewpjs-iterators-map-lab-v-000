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
	return tutorials.map(tutorial => capitalizeTutorials(tutorial))
}

const capitalizeTutorials = (tutorial) => {
	let words = tutorial.split(' ');
	let capTitle = []

	for(let  i = 0; i < words.length; i++) {
		let letters = words[i].split('');
		letters[0] = letters[0].toUpperCase();
		letters = letters.join('')
		capTitle.push(letters);
 		}
	return capTitle.join(' ');
}
