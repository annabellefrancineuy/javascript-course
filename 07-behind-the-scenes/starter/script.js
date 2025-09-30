'use strict';

// console.log('=== BEHIND THE SCENES: SCOPING AND HOISTING===');

// console.log(varX);
// // console.log(letX);
// // console.log(constX);

// // Hoisting and Temporal Dead Zone

// var varX = 1;
// let letX = 2;
// const constX = 3;

// function addDecl(a, b) {
//   return a + b;
// }

// // console.log(addDecl(5, 3)); //still works due to hoisting
// // console.log(addExp(3, 2)); //error due to no hoisting

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// const person = {
//   name: 'Jonas',
//   greet: function () {
//     console.log(`Hello I am ${this.name}`);
//   },
// };

// person.greet();

// // Borrow Function
// const anotherPerson = { name: 'Sarah' };

// anotherPerson.greet = person.greet;

// anotherPerson.greet();

// // Detached Function
// const greetFunction = person.greet;

// greetFunction();

// const obj = {
//   name: 'Objects',
//   regularMethod: function () {
//     console.log('Regular:', this.name);
//   },

//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// obj.regularMethod();
// obj.arrowMethod();

// const timer = {
//   name: 'Timer',

//   start: function () {
//     console.log(`${this.name} starting...`);
//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished!`);
//     }, 1000);
//   },

//   startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern!`);
//     }, 1500);
//   },
// };

// timer.start();
// timer.startModern();

// const functionTypes = {
//   regularFunction: function () {
//     console.log('Arguments length:', arguments.length);
//     console.log('First argument:', arguments[0]);
//   },

//   arrowFunction: () => {
//     console.log(arguments);
//     console.log('Arrow function called');
//   },

//   modernFunction: (...args) => {
//     console.log('Args length:', args.length);
//     console.log('First arg:', args[0]);
//   },
// };

// functionTypes.regularFunction('hello', 'world');
// // functionTypes.arrowFunction('test');
// functionTypes.modernFunction('modern', 'approach');

// //Primitives vs Objects

// //Primitives
// let age = 30;

// let oldAge = age;

// age = 31;

// console.log('age:', age);
// console.log('oldAge:', oldAge);

// //Objects
// const me = { name: 'Annabelle', age: 21 };
// const friend = me;

// friend.name = 'Zayne';
// friend.age = 27;

// console.log('me:', me);
// console.log('friend:', friend);

// //Shallow Copy
// const original = {
//   name: 'Alice',
//   age: 28,
//   hobbies: ['reading', 'coding'],
// };

// const shallowCopy = { ...original };

// shallowCopy.name = 'Bob';

// console.log('original name:', original.name);
// console.log('shallowCopy name:', shallowCopy.name);

// shallowCopy.hobbies.push('gaming');

// console.log('original hobbies:', original.hobbies);
// console.log('shallowCopy hobbies:', shallowCopy.hobbies);

// Deep Copy

const deepOriginal = {
  name: 'Charlie',
  age: 32,
  //nested object
  address: { city: 'Paris', country: 'France' },
  //nested array
  hobbies: ['travel', 'photography'],
};

const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');
deepCopy.name = 'Lex';

console.log('deepOriginal:', deepOriginal);
console.log('deepCopy:', deepCopy);
