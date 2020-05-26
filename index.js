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

// const titleCased = () => {
//   return tutorials
// }

// tutorial = tutorials.split(" ")

const titleCased = () => {
    return tutorials.map(tutorial => {
      return tutorial
      console.log(tutorial, "tutorial")
      
      // console.log(tutorial, "tutorialPreLoop")
      
      for (let i = 0; i < tutorial.length; i++) {
        // newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
        tutorial.push(tutorial[i].charAt(i).toUpperCase()+tutorial.slice(1));
        // tutorials.push(tutorials[i].charAt(0).toUpperCase()+tutorials.slice(1));
      // console.log(tutorial.charAt(i).toUpperCase() + tutorial.charAt(1))
      // console.log(tutorial.charAt(0).toUpperCase() + tutorial.charAt())
      // }
      // return tutorials.join(' ');
    }
    // return tutorial.join(" ");
    console.log(tutorial, "tutorialPostLoop")
  })
}
// const titleCased = () => {
//     return tutorials.map(tutorial => {
//       for (let i = 0; i < tutorial.length; i++) {
//         console.log(tutorial.charAt(i).toUpperCase() + tutorial.charAt(1))
//       // console.log(tutorial.charAt(0).toUpperCase() + tutorial.charAt())
//       }
//     })
//   }
      
      // console.log(tutorial.toUpperCase(1) + tutorial.substring(0, 1).toLowerCase)
      // console.log(tutorial.slice(1), "tutorial") // Removes first letter of the first word in each array
      // let capitalLetter = tutorial.slice(1)
      // for loop iterate over array
        // for (let i = 0; i < tutorial.length; i++) {
        //   const capitalLetter = tutorial.slice[i]
        //   // const capitalLetter = tutorial.slice[i].toUpperCase; // TypeError: Cannot read property 'toUpperCase' of undefined
        //   // const capitalLetter = tutorial.toUpperCase[i]
        //   console.log(capitalLetter.toUpperCase, "capitalLetter")
          
        // }
//     });
// }
// const titleCased = () => {
//   return tutorials.map(tutorial => tutorial.charAt(0).toUpperCase() + tutorial.substring(0, 1).toLowerCase());
//   console.log(titleCased)
// }

// TEMPLATE
// const newDays = days.map(day => day.charAt(0).toUpperCase() + day.substr(1).toLowerCase());
// console.log(newDays);

// const titleCased = () => {
//   return tutorials.map(tutorial => tutorial.charAt(0).toUpperCase() + tutorial.subtr(1).toLowerCase());
//   console.log(titleCased)
// }
// const titleCased = () => {
//   return tutorials.map(tutorial => {
    // console.log(tutorial.slice(1), "tutorial") // Removes first letter of the first word in each array
    // let capitalLetter = tutorial.slice(1)
    // for loop iterate over array
      // for (let i = 0; i < tutorial.length; i++) {
      //   const capitalLetter = tutorial.slice[i]
        // const capitalLetter = tutorial.slice[i].toUpperCase; // TypeError: Cannot read property 'toUpperCase' of undefined
        // const capitalLetter = tutorial.toUpperCase[i]
  //       console.log(capitalLetter.toUpperCase, "capitalLetter")
        
  //     }
  // })
     
     
//  }

// x = x.map(el => el.toLowerCase())

// const titleCased = tutorials.map(tutorials => tutorials.toUpperCase()) 
//   return tutorials.map( 
     
//      )
//  }

// const titleCased = tutorials.map(tutorials) => tutorials {
//       return tutorials.toUpperCase
// }
// TEMPLATE
// toUpperCase() do not change the value. Try array2 = array2.map(function (e) { 
//   return e.toUpperCase()

// const titleCased = tutorials.map(function (tutorials) {
//   return tutorials.toUpperCase()
// })


// for (const titleCased) {
//     return tutorials.toUpperCase;
//   }
// SyntaxError: /home/swakeman/code/labs/fewpjs-iterators-map-lab-v-000/index.js: Unexpected token (19:21)

// for (const titleCased) => {
//   return tutorials.toUpperCase;
// }
// SyntaxError: /home/swakeman/code/labs/fewpjs-iterators-map-lab-v-000/index.js: Unexpected token (24:21)

// const titleCased = tutorials.map(tutorials) {
//   return tutorials.toUpperCase
// }
// SyntaxError: /home/swakeman/code/labs/fewpjs-iterators-map-lab-v-000/index.js: Unexpected token, expected ";" (18:44) LINE 29


// const titleCased = tutorials.map(function (tutorials) {
//   return tutorials.toUpperCase
//   });
  // 1) index.js
  //      titleCased()
  //        returns an array with title case tutorial names:
  //    TypeError: titleCased is not a function