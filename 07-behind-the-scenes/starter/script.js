'use strict';
console.log('=== BEHIND THE SCENES: SCOPING AND HOISTING===');

console.log(varX);
// console.log(letX);
// console.log(constX);

// Hoisting and Temporal Dead Zone

var varX = 1;
let letX = 2;
const constX = 3;

function addDecl(a, b) {
  return a + b;
}

// console.log(addDecl(5, 3)); //still works due to hoisting
// console.log(addExp(3, 2)); //error due to no hoisting

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
