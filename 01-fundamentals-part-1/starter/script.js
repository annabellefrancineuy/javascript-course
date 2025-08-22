// JavaScript Fundamentals - Part 1
// We'll write our code here!
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log("=== VARIABLES ===");

// let firstname = "Jonas";
// console.log(firstname);

// let age = 30;
// console.log(age);  

// age = 39;
// console.log(age);  
 
// const birthYear = 1991;
// console.log(birthYear);
 
// const PI = 3.1415;
// console.log(PI);
 
// //do not use var
// var job = "programmer";
 
// //Good variable names
// let lastName = "Sarah";
// let myCurrentJob = "teacher";
// let PIZ = 3.14;
 
//bad variable names
//let 3Years
//let jonas&matilda
//let new
 
// const country = "Portugal"
// const language = "Portuguese"
// const population = 10;
 
// //use let only when you need you need to change the value
// let ageNow = 25;
// ageNow = 26;
 
// console.log("=== DATA TYPES ===");
 
// let weight = 45;
// console.log(weight); 45
// console.log(typeof age); 'number'
 
// //String
// let username = "";
// console.log(username);
// console.log(typeof username);
 
// //Boolean
// let javascriptisfun = true;
// console.log(javascriptisfun);
// console.log(typeof javascriptisfun);
 
// let year;
// console.log(year);
// console.log(typeof year);
 
// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable)
 
// dynamicVariable = "Now i am a string";
// console.log(dynamicVariable, typeof dynamicVariable);
 
// dynamicVariable = "true";
// console.log(dynamicVariable, typeof dynamicVariable);
 
//////////////////////////
 
//Basic opertators
// console.log("=== MATH OPERATORS ===");


// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
 
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
 
 
// console.log("Math operations:");
// console.log("Addition:", 10 + 5);
// console.log("Subtraction:", 20 - 8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division:", 15 / 3);
// console.log("Exponentiation:", 2 ** 3);
 
// //String concat
// const FirstName = "Jonas";
// const LastName = "Doe";
// console.log(firstname + " " + lastName);
 
// console.log("hello" + "World" + "!");
// console.log("Ï am" + 25 + "years old");
 
// //Assignment operators
// console.log ("=== ASSIGNMENT OPERATORS ===");
 
// let x = 10 + 5;
// console.log("x starts as:", x);
 
// x += 10;
// console.log("x starts as:", x);
 
// x *= 4;
// console.log("x starts as:", x);
 
// x /= 2;
// console.log("x starts as:", x);
 
// //Increment and decrement
// x ++;
// console.log("x starts as:", x);
 
// x--;
// console.log("x starts as:", x);
 
// //////////////
// console.log("=== COMPARISON OPERATORS ===");
 
// console.log("Age Comparison:");
// console.log(ageJonas > ageSarah);
// console.log(ageJonas >= 18);
// console.log(ageJonas < 30);
 
// console.log("Number comparison:");
// console.log(25 > 30);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge);
 
// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older:", isJonasOlder);
 
// console.log("Complex comparison");
 
// console.log(now - 1991 > now - 2018);
// console.log(ageJonas > ageSarah);

//Operator precedence
 
// const now = 2037;
// const ageJonas = now -1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; 
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) /2;
// console.log(ageJonas, ageSarah, averageAge);

//Test Data 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
 
let bmiMark = massMark / heightMark **2; 
let bmiJohn = massJohn / heightJohn **2;

console.log("Mark's BMI:" +bmiMark);
console.log("John's BMI:" + bmiJohn);

let markHigherBMI = (bmiMark > bmiJohn);

console.log("Mark has a higher BMI than John:" + markHigherBMI);

//Test Data 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;
 
bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

console.log("Mark's BMI:" +bmiMark);
console.log("John's BMI:" + bmiJohn);

 markHigherBMI = (bmiMark > bmiJohn);

console.log("Mark has a higher BMI than John:" + markHigherBMI);
 
////////////////////////////////////
// Strings and Template Literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;
 
// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);
 
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
// console.log(jonasNew);

//New BMI Calculator
massMark = 78;
heightMark = 1.69;
massJohn = 92;
heightJohn = 1.95;
 
bmiMark = massMark / heightMark ** 2;
bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);
 
if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}!`);
} else {
    console.log(`John's BMI ${bmiJohn} is higher than Mark's ${bmiMark}!`);
}


 