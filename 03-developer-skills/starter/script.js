// // Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

// //Professional Development Environment Setup

// const messyExample = function (name, age) {
//   if (age >= 18) {
//     return 'Hello ' + name + ', you are an adult';
//   } else {
//     return 'Hello ' + name + ', you are a minor';
//   }
// };

// console.log('Current messy code example:', messyExample('John', 25));
// console.log('Goal: Automatic formatting, auto-refresh, and typing shortcuts');

// //Extensions Installation test

// function testExtensions() {
//   const extensionTests = [
//     { name: 'Prettier', status: 'installed', purpose: 'code formatting' },
//     { name: 'Live Server', status: 'installed', purpose: 'auto refresh' },
//     {
//       name: 'Auto Rename Tag',
//       status: 'installed',
//       purpose: 'HTML efficiency',
//     },
//   ];
//   return extensionTests;
// }

// const extensionStatus = testExtensions();
// console.log('Extension installation status:', extensionStatus);

// //Prettier Configuration Test

// //This is a messy code with terrible formatting
// const prettierTest = {
//   firstName: 'Sarah',
//   lastname: 'Johnson',
//   skills: ['Javascript', 'React', 'Node.js'],
//   isActive: true,
// };

// const messyFunction = function (x, y, z) {
//   if (x > 0 && y > 0) {
//     return x + y + z;
//   } else {
//     return 0;
//   }
// };

// const messyArrow = items => {
//   return items.map(item => {
//     return item.toUpperCase();
//   });
// };

// console.log(
//   'Before Prettier formatting - this code works but looks unprofessional'
// );

// //Practice prettier formatting

// const studentTest = {
//   firstName: 'your- name',
//   skills: ['HTML', 'CSS', 'Javascript'],
//   experience: 'beginner',
//   goals: ['become-developer', 'build-projects'],
// };

// const testFunc = function (data) {
//   for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
//   }
// };

// //Live Server Setup and Testing

// //Test 1: Basic Live Reload
// let liveServerTest = 'Updated message - change #2';
// console.log('Live Server test:', liveServerTest);

// //Test 2: Time-based updates
// const timeStamp = new Date().toLocaleTimeString();
// const updateCount = 1;

// console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// //Test 3: Function testing
// function demonstrateLiveReload() {
//   const randomColor = ['red', 'blue', 'green', 'purple', 'orange'][
//     Math.floor(Math.random() * 5)
//   ];
//   const message = `Live Server rocks! Random color: ${randomColor}`;

//   console.log(message);
//   return message;
// }

// demonstrateLiveReload();

// //Adding this function to test live reload
// function showCurrentTime() {
//   const now = new Date().toLocaleTimeString();
//   console.log('Current time:', now);
//   return now;
// }
// showCurrentTime();

// //Code Snippets Testing

// console.log('Testing snippet functionality - cl + Tab created this!');

// function testSnippets() {
//   console.log('Function created with snipper - func + Tab!');
//   return 'Snippets working perfectly!';
// }
// testSnippets();

// const snippetTest = message => {
//   console.log(`Arrow function from snippet: ${message}`);
//   return message;
// };

// snippetTest('Snippets save so much typing time!');

// //Environment Setup Verification

// console.log('Professional Development Environment Complete!');
// console.log('Prettier: Automatic Code Formatting');
// console.log('Live Server: Automatic browse refresh');
// console.log('Snippets: Fast code generation');
// console.log('Extensions: Enhanced productivity');
// console.log('Ready for professional Javascript development');

// //Calculate time savings
// function calculateTimeSavings() {
//   const dailyConsoleLogs = 50;
//   const keystrokesSavedPerLog = 11;
//   const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
//   const monthlySavings = dailySavings * 22;

//   console.log(`Daily keystokes saved: ${dailySavings}`);
//   console.log(`Monthly keystrokes saved: ${monthlySavings}`);

//   return { daily: dailySavings, monthly: monthlySavings };
// }
// calculateTimeSavings();

///////////////////////////////

//Developer Mindset and Problem Solving

console.log(
  'Key insight: Professional developers think systemtically, not just code'
);

//Beginner vs Professional Approach

/*
Beginner Approach
1. Jump straigh to coding.
2. Get stuck immediately.
3. Google random solutions.
4. Copy-paste without understanding.
5. Get frustrated when nothing works.
*/

console.log(
  `Professional Approach:
1. Understand the problem completely.
2. Break into smaller sub-problems.
3. Research specific solutions.
4. Implement step by step.
5. Test and debug systematically.`
);

//Follow the professional approach to become a professional coder!
console.log('Goal: Transform from beginner to professional problem-solver');

//4-Step Problem-Solving Framework

console.log('===STEP 1: UNDERSTAND THE PROBLEM===');
console.log(`
    -Ask the right questions.
    -Key questions should be about:
     -What to accomplish?
     -The inputs and outputs?
     -Edge cases and constraints?
     -Any special requirements?
    `);
console.log('===STEP 2: DIVIDE AND CONQUER===');
console.log(`
    -Break big problem into small sub-problems
    -The startegy is to:
     -Identify main components
     -Find dependdencies between components
     - Order sub-problems logically
     -Ensure each piece is solvable
    `);
console.log('===STEP 3: RESEARCH SOLUTIONS===');
console.log(`
    - Find answers for sub-problems you can't solve
    - Best Sources: MDN Documentation, Stack Overflow, Google
    - The tip is to be specific and understand before implementation 
    `);
console.log('===STEP 4: IMPLEMENT AND TEST===');
console.log(`
    - Code the solution step by step
    -Start simple, test each piece, then combin gradually
    `);

//Real-World Challenge: Smart Home Thermometer

//Analyze the problem
//Follow the 4-steps to problem-solving

//Here is the solution:
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp != 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//Extended Challenge Practice

//Problem is the function should receive 2 arrays instead of one
//Calculate the amplitude across both arrays combined

//To merge two arrays into one, you use this code: array1.concat(array2)

//Extended Implementation

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp != 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const array1 = [3, 5, 1];
const array2 = [9, 0, 5];
const amplitudeNew = calcTempAmplitudeNew(array1, array2);
console.log(amplitudeNew);
console.log(
  'Problem-solving framework applied successfully to extended challenge!'
);

console.log('Framework mastered - ready for independent problem solving!');
