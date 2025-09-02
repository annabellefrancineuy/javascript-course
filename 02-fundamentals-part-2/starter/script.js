console.log("Fundamentals part two!");

// console.log(`=== FUNCTIONS ===`);

// function logger(){
//  console.log("This functions is working!");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// // do not do this
// const juice1 = `Juice with 5 apples..`;
// const juice2 = 'Juice with 3 apples..';

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// };

// const age1 = calcAge(2000);
// console.log(age1);

// //parameters vs arguments
// function calcAge2(birthYear, currentYear){
//     const age = currentYear - birthYear;
//     return age ;
// }
// const MyAge = calcAge(1991, 2037);
// const HerAge = calcAge(2005, 2037);

// console.log(`I am ${MyAge} years old.`);
// console.log(`She am ${HerAge} years old.`);

// //handling missing parameters
// function introduce(firstName, lastName, age){
//     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
//     return introduction;
// }
// console.log(introduce("Rachel", "Alonzo", 21));
// console.log(introduce("Tara"));


// function calcAge3(birthYear){
//     return 2037 - birthYear;
// }
// function yearsUntilRetirement(birthYear, firstName){
//     const age = calcAge3(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years.`;
// } else{
//     return `${firstName} has already retired!`;
// }
// }
// console.log(yearsUntilRetirement(1991, "Zayne"));
// console.log(yearsUntilRetirement(1950, "Sylus"));

// //function scope
// const globalVar = `I am global`;

// function testScope(){
//     const localVar = `I am local`;
//     console.log(globalVar);
//     console.log(localVar);
// }

// testScope();
// console.log(globalVar);
// // //console.log(localVar); //localVar is not defined because it is inside of the function code


// //practical scope example
// const userName = "Zayne";

// function createWelcomemessage(user){
//     const message = `Welcome back, ${userName}!`;
// const timestamp = new
// Date().toLocaleTimeString();

// return `${message} Current time: ${timestamp}`;
// }
// console.log(createWelcomemessage(userName));
//console.log(message); //message is not defined; it is local to function

// ////////////////////////////////////
// // Coding Challenge #1

// Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) /3;
// }

// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
   
//  if (avgDolphins >= 2 * avgKoalas){
//  return console.log(`Dolphins win! ${avgDolphins} vs ${avgKoalas}`);
//  } else if (avgKoalas >= 2 * avgDolphins) {
//  return console.log(`Koalas win! ${avgKoalas} vs ${avgDolphins}`);
//    } else { 
//  return console.log (`No team wins! Dolphins:${avgDolphins}, Koalas:${avgKoalas}`);
//  }
// }
 

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

///////////////////////////////////

// console.log(`=== ARRAYS ===`);

//ways to create arrays
// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// const mixed = ["Jonas", 27, true, grades];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// //access array elements

// //array indexing starts at 0
// console.log(grades[0]);
// console.log(grades[3]);

// //array length property
// console.log(grades.length);

// //changing the index 0 value
// grades[0] = 99;
// console.log(grades[0]); //new element is 99 while old element is 85

// //array with expressions
// const calcAge = function(birthYear){
//     return 2025 - birthYear;
// };
// const ages = [calcAge(1996), calcAge(2005), calcAge(2004)];
// console.log(ages);

// ages[1] = calcAge(1991);
// console.log(ages);

//array methods

//adding elements

// const friends = ["Zayne", "Sylus", "Caleb"];
// console.log(friends);
// console.log(friends.length);

// //push - adds element to the last
// const newLength = friends.push("Xavier");
// console.log(friends);
// console.log(newLength);

// //unshift - adds element as a first item
// friends.unshift("Rafayel");
// console.log(friends);

// //remove elements

//pop - remove element from end
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// //shift - remove element from beginning
// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// //find elements

// //IndexOf - find position of elements
// console.log(friends.indexOf("Zayne"));
// console.log(friends.indexOf("Xavier"));

// //Includes - check if elements exist
// console.log(friends.includes("Sylus"));
// console.log(friends.includes("Rafayel"));

//Array Iteration

// const friends = ["Zayne", "Sylus", "Caleb"];

// //loops
// //traditional for loop
// for (let i = 0; i < friends.length; i++){
//     console.log(friends[i]);
// }
// friends.forEach(function (friends, index){
//     console.log(`${index}: ${friends}`);
// });

//practical example
// const grades = [85, 45, 50, 96, 88, 74];
// let total = 0;

// for(let i = 0; i < grades.length; i++){
//     total += grades[i];
// }
// const average = total/grades.length;
// console.log(`Average grade:${average.toFixed(2)} `);

// let passedCount = 0;
// grades.forEach((grade) => {
//     if (grade >= 70)
//         passedCount++;
// });
// console.log(`${passedCount} out of ${grades.length} students passed`);

////////////////////////////////////
// Coding Challenge #2 - Student Grade Manager

const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to calculate average
function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++){
    sum += grades[i];
  }
  return sum / grades.length;
}

// Function to find highest grade
function findHighestGrade(grades) {
  let highest = grades[0];
  for (let i = 1; i < grades.length; i++)
   { if (grades[i] > highest){
      highest = grades[i];
   }
  }
  return highest;
}

// Function to find lowest grade
function findLowestGrade(grades) {
let lowest = grades[0];
  for (let i = 1; i < grades.length; i++)
   { if (grades[i] < lowest){
      lowest = grades[i];
   }
  }
  return lowest;
}

// Function to count passing students
function countPassing(grades, passingGrade) {
  let countpass = 0;
  grades.forEach((grade) => {
    if (grade >= 70) countpass++;
  });
  return countpass;
}

// Generate complete report
average = calculateAverage(grades);
highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);
