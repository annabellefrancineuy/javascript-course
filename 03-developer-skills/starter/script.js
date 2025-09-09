// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//Professional Development Environment Setup

const messyExample = function (name, age) {
  if (age >= 18) {
    return 'Hello ' + name + ', you are an adult';
  } else {
    return 'Hello ' + name + ', you are a minor';
  }
};

console.log('Current messy code example:', messyExample('John', 25));
console.log('Goal: Automatic formatting, auto-refresh, and typing shortcuts');

//Extensions Installation test

function testExtensions() {
  const extensionTests = [
    { name: 'Prettier', status: 'installed', purpose: 'code formatting' },
    { name: 'Live Server', status: 'installed', purpose: 'auto refresh' },
    {
      name: 'Auto Rename Tag',
      status: 'installed',
      purpose: 'HTML efficiency',
    },
  ];
  return extensionTests;
}

const extensionStatus = testExtensions();
console.log('Extension installation status:', extensionStatus);

//Prettier Configuration Test

//This is a messy code with terrible formatting
const prettierTest = {
  firstName: 'Sarah',
  lastname: 'Johnson',
  skills: ['Javascript', 'React', 'Node.js'],
  isActive: true,
};

const messyFunction = function (x, y, z) {
  if (x > 0 && y > 0) {
    return x + y + z;
  } else {
    return 0;
  }
};

const messyArrow = items => {
  return items.map(item => {
    return item.toUpperCase();
  });
};

console.log(
  'Before Prettier formatting - this code works but looks unprofessional'
);

//Practice prettier formatting

const studentTest = {
  firstName: 'your- name',
  skills: ['HTML', 'CSS', 'Javascript'],
  experience: 'beginner',
  goals: ['become-developer', 'build-projects'],
};

const testFunc = function (data) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
};

//Live Server Setup and Testing

//Test 1: Basic Live Reload
let liveServerTest = 'Updated message - change #2';
console.log('Live Server test:', liveServerTest);

//Test 2: Time-based updates
const timeStamp = new Date().toLocaleTimeString();
const updateCount = 1;

console.log(`Live Server update #${updateCount} at ${timeStamp}`);

//Test 3: Function testing
function demonstrateLiveReload() {
  const randomColor = ['red', 'blue', 'green', 'purple', 'orange'][
    Math.floor(Math.random() * 5)
  ];
  const message = `Live Server rocks! Random color: ${randomColor}`;

  console.log(message);
  return message;
}

demonstrateLiveReload();

//Adding this function to test live reload
function showCurrentTime() {
  const now = new Date().toLocaleTimeString();
  console.log('Current time:', now);
  return now;
}
showCurrentTime();

//Code Snippets Testing

console.log('Testing snippet functionality - cl + Tab created this!');

function testSnippets() {
  console.log('Function created with snipper - func + Tab!');
  return 'Snippets working perfectly!';
}
testSnippets();

const snippetTest = message => {
  console.log(`Arrow function from snippet: ${message}`);
  return message;
};

snippetTest('Snippets save so much typing time!');

//Environment Setup Verification

console.log('Professional Development Environment Complete!');
console.log('Prettier: Automatic Code Formatting');
console.log('Live Server: Automatic browse refresh');
console.log('Snippets: Fast code generation');
console.log('Extensions: Enhanced productivity');
console.log('Ready for professional Javascript development');

//Calculate time savings
function calculateTimeSavings() {
  const dailyConsoleLogs = 50;
  const keystrokesSavedPerLog = 11;
  const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
  const monthlySavings = dailySavings * 22;

  console.log(`Daily keystokes saved: ${dailySavings}`);
  console.log(`Monthly keystrokes saved: ${monthlySavings}`);

  return { daily: dailySavings, monthly: monthlySavings };
}
calculateTimeSavings();
