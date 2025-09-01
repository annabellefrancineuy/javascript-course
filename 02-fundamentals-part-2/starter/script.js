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

const calcAge = function(birthYear){
    return 2037 - birthYear;
};

const age1 = calcAge(2000);
console.log(age1);

//parameters vs arguments
function calcAge2(birthYear, currentYear){
    const age = currentYear - birthYear;
    return age ;
}
const MyAge = calcAge(1991, 2037);
const HerAge = calcAge(2005, 2037);

console.log(`I am ${MyAge} years old.`);
console.log(`She am ${HerAge} years old.`);

//handling missing parameters
function introduce(firstName, lastName, age){
    const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
    return introduction;
}
console.log(introduce("Rachel", "Alonzo", 21));
console.log(introduce("Tara"));


function calcAge3(birthYear){
    return 2037 - birthYear;
}
function yearsUntilRetirement(birthYear, firstName){
    const age = calcAge3(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
    return `${firstName} retires in ${retirement} years.`;
} else{
    return `${firstName} has already retired!`;
}
}
console.log(yearsUntilRetirement(1991, "Zayne"));
console.log(yearsUntilRetirement(1950, "Sylus"));

//function scope
const globalVar = `I am global`;

function testScope(){
    const localVar = `I am local`;
    console.log(globalVar);
    console.log(localVar);
}

testScope();
console.log(globalVar);
// //console.log(localVar); //localVar is not defined because it is inside of the function code


//practical scope example
const userName = "Zayne";

function createWelcomemessage(user){
    const message = `Welcome back, ${userName}!`;
const timestamp = new
Date().toLocaleTimeString();

return `${message} Current time: ${timestamp}`;
}
console.log(createWelcomemessage(userName));
//console.log(message); //message is not defined; it is local to function

// ////////////////////////////////////
// // Coding Challenge #1

// Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) /3;
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
   
 if (avgDolphins >= 2 * avgKoalas){
 return console.log(`Dolphins win! ${avgDolphins} vs ${avgKoalas}`);
 } else if (avgKoalas >= 2 * avgDolphins) {
 return console.log(`Koalas win! ${avgKoalas} vs ${avgDolphins}`);
   } else { 
 return console.log (`No team wins! Dolphins:${avgDolphins}, Koalas:${avgKoalas}`);
 }
}
 

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));

