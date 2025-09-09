// // Remember, we're gonna use strict mode in all scripts now!
'use strict';

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

// //Developer Mindset and Problem Solving

// console.log(
//   'Key insight: Professional developers think systemtically, not just code'
// );

// //Beginner vs Professional Approach

// /*
// Beginner Approach
// 1. Jump straigh to coding.
// 2. Get stuck immediately.
// 3. Google random solutions.
// 4. Copy-paste without understanding.
// 5. Get frustrated when nothing works.
// */

// console.log(
//   `Professional Approach:
// 1. Understand the problem completely.
// 2. Break into smaller sub-problems.
// 3. Research specific solutions.
// 4. Implement step by step.
// 5. Test and debug systematically.`
// );

// //Follow the professional approach to become a professional coder!
// console.log('Goal: Transform from beginner to professional problem-solver');

// //4-Step Problem-Solving Framework

// console.log('===STEP 1: UNDERSTAND THE PROBLEM===');
// console.log(`
//     -Ask the right questions.
//     -Key questions should be about:
//      -What to accomplish?
//      -The inputs and outputs?
//      -Edge cases and constraints?
//      -Any special requirements?
//     `);
// console.log('===STEP 2: DIVIDE AND CONQUER===');
// console.log(`
//     -Break big problem into small sub-problems
//     -The startegy is to:
//      -Identify main components
//      -Find dependdencies between components
//      - Order sub-problems logically
//      -Ensure each piece is solvable
//     `);
// console.log('===STEP 3: RESEARCH SOLUTIONS===');
// console.log(`
//     - Find answers for sub-problems you can't solve
//     - Best Sources: MDN Documentation, Stack Overflow, Google
//     - The tip is to be specific and understand before implementation
//     `);
// console.log('===STEP 4: IMPLEMENT AND TEST===');
// console.log(`
//     - Code the solution step by step
//     -Start simple, test each piece, then combin gradually
//     `);

// //Real-World Challenge: Smart Home Thermometer

// //Analyze the problem
// //Follow the 4-steps to problem-solving

// //Here is the solution:
// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp != 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// //Extended Challenge Practice

// //Problem is the function should receive 2 arrays instead of one
// //Calculate the amplitude across both arrays combined

// //To merge two arrays into one, you use this code: array1.concat(array2)

// //Extended Implementation

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp != 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const array1 = [3, 5, 1];
// const array2 = [9, 0, 5];
// const amplitudeNew = calcTempAmplitudeNew(array1, array2);
// console.log(amplitudeNew);
// console.log(
//   'Problem-solving framework applied successfully to extended challenge!'
// );

// console.log('Framework mastered - ready for independent problem solving!');

//////////////////////////////////////

//Research and Debugging Mastery

//Random Google vs Strategic Research

/*
Beginner Approach:
  - You only search when completely stuck
  - Use vague search terms
  - Copy and paste first found solutions
  - Don't understand wha the code does
  - Same problem happens repeatedly
*/
// console.log('Goal: Master research and debugging skills');
// console.log(
//   'Startegic research builds lasting knowledge, not just quick fixes'
// );
// console.log(`===PROFESSIONAL RESESEARCH TECHNIQUES`);
// console.log('=== USE SPECIFIC KEYWORDS===');
// console.log(
//   `Bad: javascript problem with array
//      Good: javascript find maximum value in array
//      Best: javascript Math.max array speed operator`
// );
// console.log('===INCLUDE PROGRAMMING LANGUAGE ===');
// console.log(`Always start with "javascript" for our context.`);
// console.log('===SITE SPECIFIC SEARCHES===');
// console.log(
//   `site:stackoverflow.com for community solutions
//     site: developer.mozilla.org dfor official docs
//     site:github.com for code examples
//     '`
// );
// console.log('===SEARCH CURRENT SOLUTIONS===');
// console.log(
//   `Add year or "2024" for up-to-date approaches
//     `
// );

// //Exercise: Finding Maximum Value in Array

// //method 1: Using Math.max with spread operator
// function demonstrateArrayMax(numbers) {
//   const method1 = Math.max(...numbers);

//   //method2: Using for loop (Traditional)
//   let method2 = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > method2) method2 = numbers[i];
//   }

//   //method 3: using reduce method
//   const method3 = numbers.reduce((max, current) =>
//     current > max ? current : max
//   );
//   return { method1, method2, method3 };
// }

// const testNumbers = [3, 7, 2, 9, 1, 5];
// const maxResults = demonstrateArrayMax(testNumbers);
// console.log('Multiple approaches from research:', maxResults);

//Stack Overflow Research Results

// function reverseStringMethods(str) {
//   //method 1: Most common stack overflow solution
//   const method1 = str.split('').reverse().join('');

//   //method 2: Manual loop approach
//   let method2 = '';
//   for (let i = str.length - 1; i > 0; i--) {
//     method2 += str[i];
//   }

//   //method 3: Modern spread operator approach
//   const method3 = [...str].reverse().join('');

//   return { method1, method2, method3 };
// }

// const reverseResults = reverseStringMethods('hello');
// console.log('Stack Overflow research results:', reverseResults);

// //MDN Documentation Mastery

// function demonsrateConcat() {
//   const array1 = [1, 2, 3];
//   const array2 = [4, 5, 6];
//   const array3 = [7, 8, 9];

//   const simple = array1.concat(array2);
//   const multiple = array1.concat(array2, array3);

//   console.log('Original array1 unchanged:', array1);
//   return { simple, multiple };
// }
// const concatResults = demonsrateConcat();
// console.log('MDN documentation applied:', concatResults);

// //Systematic Debugging Process

// console.log('===5-STEP DEBUGGING PROCESS===');
// console.log(
//   `1. Identify - Recognize bug exists.
//      2. Isolate - Locate where bug happnes.
//      3. Investigate - Understand why bug occurs.
//      4. Fix - Implement correction.
//      5. Prevent - Add safeguards against similar bugs.
//     `
// );

// // //Buggy function
// // function calculateAverageScore(score) {
// //   let total; //total starts as undefined (should be 0)

// //   for (let i = 0; i <= score.length; i++) {
// //     total += scores[i]; //Loop condition uses <= (should be <)
// //   }
// //   return total / (scores.length + 1); //Should be scores.length
// // }
// // const testScores = [85, 92, 78, 96, 88];
// // const buggyResult = calculateAverageScore(testScores);
// // console.log('Buggy result:', buggyResult); // Will show Nan or incorrect value

// //Browser Developer Tools Mastery
// //Essential Console Methods
// /*
// console.log() - Basic output
// console.warn() - Warnings (yellow)
// console.error() - Errors (red)
// console.table() - Formatted tables for objects/arrays
// console.group() / console.groupEnd() - Organized sections
// */

// //Console Debugging practice
// function demonstrateConsoleDebugging(data) {
//   console.group('Debugging Session');

//   console.log('Input data:', data);

//   if (typeof data !== 'object') {
//     console.warn('Warning: Expected object, got', typeof data);
//   }
//   console.table(data);
//   console.groupEnd();
//   return Array.isArray(data) ? data.length : Object.keys(data).length;
// }
// const arrayData = [1, 2, 3, 4, 5];
// const objectData = { name: 'John', age: 30, city: 'New York' };

// demonstrateConsoleDebugging(arrayData);
// demonstrateConsoleDebugging(objectData);

// //Debugger Statement and Breakpoints
// // function stepThroughDebugging(numbers) {
// //   debugger; // This will pause execution in browser dev tools

// //   let sum = 0;
// //   let count = 0;

// //   for (let i = 0; i < numbers.length; i++) {
// //     const currentNumber = numbers[i];

// //     console.log(`Processing index ${i}: value = ${currentNumber}`);

// //     if (typeof currentNumber === 'number') {
// //       sum += currentNumber;
// //       count++;
// //     } else {
// //       console.error(`Invalid number at index ${i}:`, currentNumber);
// //     }
// //   }

// //   const average = count > 0 ? sum / count : 0;
// //   console.log('Final results:', { sum, count, average });

// //   return average;
// // }

// // // Test the debugging function
// // const mixedNumbers = [10, 20, 'error', 30, null, 40];
// // const debugResult = stepThroughDebugging(mixedNumbers);
// // console.log('Debug session result:', debugResult);

// //Complete Bug Fixing Application
// function calculateAverageScoreFixed(scores) {
//   if (!Array.isArray(scores) || scores.length === 0) {
//     console.error('Invalid input: scores must be a non-empty array');
//     return 0;
//   }

//   let total = 0; //Fixed: Initialize to 0 and is not undefined

//   for (let i = 0; i < scores.length; i++) {
//     // Fixed: < instead of <=
//     if (typeof scores[i] === 'number') {
//       total += scores[i];
//     } else {
//       console.warn(`Skipping non-number value at index ${i}:`, scores[i]);
//     }
//   }
//   return total / scores.length; // Fixed: Remove + 1
// }

// // Test the fixed function
// const testScores = [85, 92, 78, 96, 88];
// const fixedResult = calculateAverageScoreFixed(testScores);
// console.log('Fixed result:', fixedResult); // Should show correct average: 87.8

// // Comprehensive debugging verification
// console.group('Debugging Verification Tests');

// // Test 1 - Normal case
// const normalScores = [85, 92, 78, 96, 88];
// const normalResult = calculateAverageScoreFixed(normalScores);
// console.log('Normal case result:', normalResult);

// // Test 2 - Edge case with invalid data
// const mixedScores = [85, 'invalid', 92, null, 78];
// const mixedResult = calculateAverageScoreFixed(mixedScores);
// console.log('Mixed data result:', mixedResult);

// // Test 3 - Error case with invalid input
// const errorResult = calculateAverageScoreFixed('not an array');
// console.log('Error case result:', errorResult);

// // Test 4 - Edge case with empty array
// const emptyResult = calculateAverageScoreFixed([]);
// console.log('Empty array result:', emptyResult);

// console.groupEnd();

// console.log('Systematic debugging process successfully applied!');
// console.log(
//   'All bugs identified, isolated, investigated, fixed, and prevented'
// );

//Advanced Challenges

// console.log('Ready to tackle complex problems using systematic approaches');
// console.log('Challenge: Build solutions that work under pressure');

// //Section 1: Weather Forecast Challenge

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// function printForecast(arr) {
//   let str = '';
//   //I chose the loop approach because it's easy for beginners.
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}°C in ${i + 1} days ... `;
//   }
//   console.log('...' + str);
// }
// printForecast(data1);
// printForecast(data2);

// //Section 2: Time-Pressured Challenge
// function analyzeWorkWeek(dailyHours) {
//   const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
//   const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;

//   const maxHours = Math.max(...dailyHours);
//   const maxDayIndex = dailyHours.indexOf(maxHours);
//   const days = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday',
//   ];
//   const maxDay = days[maxDayIndex];
//   const daysWorked = dailyHours.filter(hours => hours > 0).length;
//   const isFullTime = totalHours >= 35;

//   return {
//     totalHours,
//     averageHours,
//     maxDay,
//     daysWorked,
//     isFullTime,
//   };
// }
// const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
// const analysis = analyzeWorkWeek(weeklyHours);
// console.log('Work week analysis:', analysis);
// console.log('Challenge completed under time pressure!');

// //Section 3: Debug Legacy Code
// function enhancedForecastFunction(temperatures, options = {}) {
//   if (!Array.isArray(temperatures) || temperatures.length === 0) {
//     console.error('Invalid input: temperatures must be a non-empty array.');
//     return '';
//   }
//   const { unit = '°C', seperator = '...', includeIndex = true } = options;

//   let result = '';
//   for (let i = 0; i < temperatures.length; i++) {
//     const dayNumber = includeIndex ? i + 1 : i;
//     result += `${temperatures[i]}${unit} in ${dayNumber} days${seperator}`;
//   }
//   return seperator + result.slice(0, -seperator.length);
// }
// const testData = [15, 18, 22, 19];
// console.log('Fixed and Enhanced function:', enhancedForecastFunction(testData));
// console.log(
//   'Enhanced function:',
//   enhancedForecastFunction(testData, {
//     unit: '°F',
//     separator: ' | ',
//     includeIndex: true,
//   })
// );
