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

function titleCase(title) {
	const titleCasedTutorial = [];
	const words = title.split(" ");
	for(let word of words) {
		const letters = word.split("");
		letters[0] = letters[0].toUpperCase();
		titleCasedTutorial.push(letters.join(""));
	}
	
	return titleCasedTutorial.join(" ");
	
}

const titleCased = () => tutorials.map(titleCase)
