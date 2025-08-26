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

//BMI Calculator

//Test Data 1
// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;
 
// let bmiMark = massMark / heightMark **2; 
// let bmiJohn = massJohn / heightJohn **2;

// console.log("Mark's BMI:" +bmiMark);
// console.log("John's BMI:" + bmiJohn);

// let markHigherBMI = (bmiMark > bmiJohn);

// console.log("Mark has a higher BMI than John:" + markHigherBMI);

// //Test Data 2
// massMark = 95;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;
 
// bmiMark = massMark / (heightMark * heightMark);
// bmiJohn = massJohn / (heightJohn * heightJohn);

// console.log("Mark's BMI:" +bmiMark);
// console.log("John's BMI:" + bmiJohn);

//  markHigherBMI = (bmiMark > bmiJohn);

// console.log("Mark has a higher BMI than John:" + markHigherBMI);
 
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
// massMark = 78;
// heightMark = 1.69;
// massJohn = 92;
// heightJohn = 1.95;
 
// bmiMark = massMark / heightMark ** 2;
// bmiJohn = massJohn / (heightJohn * heightJohn);
// console.log(bmiMark, bmiJohn);
 
// if (bmiMark > bmiJohn) {
//     console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}!`);
// } else {
//     console.log(`John's BMI ${bmiJohn} is higher than Mark's ${bmiMark}!`);
// }

///////////////////////////////

// console.log("=== TYPE CONVERSION AND COERCION ===");

//  //manual type conversion
//  const inputYear = '1991';
//  console.log(Number(inputYear), inputYear);
//  console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof Nan);

// console.log(String(23), 23);
// console.log(typeof String(23));

// //automatic type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');
// console.log('23' * '2');

// //math operators such as subtraction, multiplication and division
// // convert strings to numbers
// // the plus operator does the opposite, it converts numbers to strings

// //tricky example
// let n = '1' + 1;
// console.log(n);

// n = n - 1;
// console.log(n);

// //type conversion is explicit/manual and is recommended
// //type coercion is implicit/automatic and javascript decides itself 
// // which can lead to bugs

// //practice
// // exercise 1
// console.log('5' + 2); //output is 52
// console.log('5' - 2); //output is 3
// console.log('5' * 2); //output is 10
// console.log('5' / 2); //output is 2.5

// //convert these values explicitly
// const userAge = '25';
// const userScore = 95;

// console.log(Number(userAge));
// console.log(String(userScore));

// //exercise 2: fix the bug to calculate two numbers
// const num1 = Number(prompt("First number:"));
// const num2 = Number(prompt("Second number:"));
// const sum = num1 + num2;
// console.log(`The sum of num1 and num2 is: ${sum}`);



/////////////////////////////////
// console.log("=== EQUALITY OPERATORS ===");

// const age = '18';
// if (age === 18) console.log('You just became an adult!');
// if (age == 18) console.log('You just became an adult!');

// console.log('18' === 18);
// console.log('18' == 18);
// console.log('18' !== 18);

// // double equal sign can be dangerous and causes bugs
// console.log('0');
// console.log( 0 == false);
// console.log( '0' == false);
// console.log( null == undefined);

// console.log( '' == 0);
// console.log("   " == 0);

// //best practice is to use the triple equal sign
// const favourite = prompt("What's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23){
//     console.log('Cool! 23 is an amazing number!');
// } 
// if (favourite == 23){
//     console.log('23 string is also a cool number');
// } else if (favourite === 9){
//     console.log('9 is also a cool number');
// }else {
//     console.log('Number is not 23 or 7 or 9');
// }

// //Not-equal operator
// if (favourite !== 23) console.log('Why not 23?');

//exercise
// console.log(5 === "5"); //false is the output because different types
// console.log(5 == "5"); //true is the output because type coercion happens
// console.log(true === 1); //false because different types and values
// console.log(true == 1); //true because type coercion happens
// console.log(false === 0); // false because different types and values
// console.log(false == 0); //true because type coercion happens


//exercise 2
// const username = prompt('Username:');
// const password = prompt('Password:');

// if (username === "admin" && password === "1234"){
//     console.log("Welcome admin!");
// } else {
//     console.log("Access denied!");
// }


/////////////////////////////////
// console.log("=== LOGICAL OPERATORS ===");
// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(`This an AND OPERATOR: ${hasDriversLicense && hasGoodVision}`);
// console.log(`This an OR OPERATOR: ${hasDriversLicense || hasGoodVision}`);
// console.log(`This a NOT OPERATOR: ${!hasDriversLicense}`);

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired){
//     console.log("Annabelle is able to drive!");
// } else{
//     console.log("Someone else should drive...");
// }

// //exercise: Club Entry System
// const age = 20;
// const hasID = true;
// const isVIP = true;

// if(age >= 18 && hasID || isVIP){
//     console.log("Welcome to the club!");
// } else {
//     console.log("You are not allowed to enter the club!");
// }

// //exercise 2: Weather Advisor
// const temperature = 25;
// const isRaining = false;
// const isWindy = true;

// console.log(temperature, isRaining, isWindy);

// //for this exercise, the temperature condition is between 20 and 30 degrees inclusive
// //which means the condition should be restrictive to 20 and 30 degrees
// //so we use the AND operator to make sure both conditions are true
// //This also applies to the second condition between 15 and 35 degrees
// //The ! opeartor is used to check if it is NOT raining and NOT windy

// if (temperature >= 20 && temperature <= 30 && !isRaining && !isWindy){
//     console.log("It's a perfect day today! Let's go to the park!");
// } else if (temperature >= 15 && temperature <= 35 && !isRaining){
//    console.log("It's a good day to go to the park!");
// } else {
//     console.log("Stay inside and read a book instead of going to the park.");
// } 


///////////////////////////////
// console.log("=== TERNARY OPERATOR ===");

// const age = 23;

// //basic ternary condition

// const drink = age >= 18 ? 'wine': 'water';
// console.log(drink);

// let drink2;
// if (age >= 18){
//     drink2 = 'wine';
// } else{
//     drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
 
//practice ternary

//exercise 1: status messages
// const isLoggedIn = true;
// const welcomeMessage = isLoggedIn == true ? 'Welcome back!' : 'Please log in';
//console.log(welcomeMessage);
//console.log(`${welcomeMessage = isLoggedIn == true ? 'Welcome back! ': 'Please log in '}, user!`);

// const isPremium = false;
// const price = isPremium == true ? 100 * 0.8 : 100;
// console.log(`The price is ${price}`);

// //or 

// console.log(`The price is ${isPremium == true ? 100 * 0.8 : 100}`);

//exercise 2: smart responses
// const score = 85;
// console.log(`Your score is: ${score} ${score >= 90 ? '(You Passed!)' : '(You Failed!)'}`);

// const weather = "Sunny";
// console.log(`The weather is ${weather}. So ${weather == "Sunny" ? 'Great for outdoor activities' : 'Stay inside'}`);

// const battery = 15;
// console.log(`Your battery is ${battery}: ${battery <= 20 ? 'Low battery warning' : 'Battery level is OK'}`);

//Final Challenge: Tip Calculator

const bill = 430;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total was ${tip + bill}`);









