'use strict';

console.log('Game setup ready');

//====== DOM Element Selection - The Foundation
console.log('=== DOM ELEMENT SELECTION ===');

const messageEl = document.querySelector('.message');
console.log(messageEl);
console.log(messageEl.textContent);

//messageEl.textContent = 'Hello from Javascript';

const scoreEl = document.querySelector('.score');
console.log('Score element:', scoreEl);
console.log(scoreEl.textContent);

// scoreEl.textContent = 15;

const numberEl = document.querySelector('.number');
console.log(numberEl);
// numberEl.textContent = 15;

const highscoreEl = document.querySelector('.highscore');
console.log('Current highscore:', highscoreEl.textContent);

const guessEl = document.querySelector('.guess');
guessEl.value = 10;

console.log('Guess input value:', guessEl.value);

//Game State Variables

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//For debugging
console.log('Secret number:', secretNumber);

let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Game State Initialized');

//Create these variables
//playerName attempts, gameActive boolean

let playerName = 'Annabelle';
let attempts = 0;
let gameActive = true;

console.log('Player:', playerName);
console.log('Attempts:', attempts);
console.log('Game active:', gameActive);

//Basic Game Logic Implementation
document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked!');
  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);

  if (guess === secretNumber) {
    console.log('Correct guess!');
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector.apply('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log('Too High!');
    document.querySelector('.message').textContent = 'Too high';
  } else if (guess < secretNumber) {
    console.log('Too low');
    document.querySelector('.message').textContent = 'Too low!';
  }
});
