/*
0. In your HTML, import this JavaScript file. Bonus points: try to do it from the <head> without blocking the <body> rendering.
*/

/*
The js script will be called in the head element by using:
    <script src="main.js" defer></script>

This allows the script to be loaded in parallel while the page is rendered and executed
after the page is rendered.

Note: async can also be used to execute the script before parsing.

Source: https://www.w3schools.com/tags/att_script_defer.asp
*/

/*
1. Variable scopes: based on MDN, make an example how function scope, block scope, and global scope:
* https://developer.mozilla.org/en-US/docs/Glossary/Scope
*/

// since x is a var it can be called here, as it is hoisted and
// initialised to undefined, if it were a const or let we would
// get a typerror because those are not initialised, but still  
// hoisted this is called puttin them in a temporal dead zone
var x = 10;

// starting from here x can be called everywhere inside or out of
// functions or block scopes

console.log(x);

function scopeExercise() {
  // y's lifespan belongs to the function so it can only be called 
  // within its function and sub functions
  const y = 20;

  callMe();

  function callMe(){
    console.log(y);
  }

  
  {
    // z's lifespan similarly belongs only to the its block
    let z = 30;
    console.log(z);
  }

  return "Solved!"
}

console.log('Scope exercise:', scopeExercise());

/*
2. Strings: Display the bio of Ada Lovelace in the form of "Hello, my name is Ada Lovelace, I was born 36 years ago."
*/
const firstName = 'Ada';
const lastName = 'Lovelace';
const age = 36;

console.log(`Bio: \"Hello, my name is ${firstName} ${lastName}, I was born 36 years ago.\"`);

/*
3. Objects: Declare an object, access/update properties, add a new property, delete a property, and iterate keys.
*/
const person = {
  name: 'Ada',
  age: 36,
  skills: ['math', 'programming'],
  address: { city: 'London', country: 'UK' }
};

console.log(`Log the person\`s name and city: ${person.name} ${person.address.city}`);

console.log('Initial age:', person.age)
person.age = 37
console.log('Update age:', person.age /* update age to 37 and log the object */);

person["role"] = "ADMIN";
console.log('Add role:', person.role/* add a "role" property, set a string value and log */);

delete person.address.country;
console.log('Delete country:', person.address/* delete country and log the object */);

{
  const arr = []

for ([key, value] of Object.entries(person)){
  arr.push([key, value])
}
  console.log('Iterate keys:', arr/* iterate over the object's keys and values and log them */);
}

/*
4. Write a function that makes a string sentence cased - starts with capital letter and ends with "."
* Don't focus on edge cases for now (like multiple spaces, punctuation, etc), it needs only to handle this string.
*/
const sentence = '   hello there GENERAL KENOBI   ';
function toSentenceCase(str){
  const s = str.trim().toLowerCase();

  return s.charAt(0).toUpperCase() + s.slice(1) + ".";
}

console.log('Sentence-cased sentence:', toSentenceCase(sentence));

/*
5. Iterate the greeting, log the current character, index and 🎅.
*/
const greeting = 'Ho Ho Ho! Merry Christmas!';
console.log('Indexed iteration:', /* implement string iteration */ greeting);

for (const [i, char] of Array.from(greeting).entries()){
  console.log(i, char, '🎅')
}

/** Array Methods **/
/*
6. Write a function that receives the array below as parameters and returns a new array which has all the elements added with 2
*/
var strArr = ['13', '2', '34', '14', '5', '86', '3.46'];

function addInNewArray(arr){
  return arr.map(x => Number.parseFloat(x) + 2)
}

console.log('Add in new array: ', addInNewArray(strArr));

/* 
7. Implement a function that receives an array of objects and a key name and returns an array with all the values corresponding to the key of the objects in the array.
*/
const mappings = [
  {id: 1, color: 'magenta', height: 15, width: 20, distance: 10},
  {id: 2, color: 'red', height: 5, width: 30, distance: 15},
  {id: 3, color: 'green', height: 7, width: 9, distance: 8},
  {id: 4, color: 'gray', height: 2, width: 3, distance: 3},
  {id: 5, color: 'blue', height: 10, width: 10, distance: 2},
  {id: 6, color: 'crimson', height: 7, width: 8, distance: 16},
];

function pluck(arr, key) {
  return arr.map(obj => obj[key]);
}

console.log(pluck(mappings, 'color'));  // => ['magenta', 'red', 'green' .......];

/*
9. Implement a function that returns the area of all elements in the above array, area = height * width.
*/

function calculateArea(arr){
  return arr.map(x => x.height * x.width)
}
console.log(calculateArea(mappings));

/*
10. Write a function that returns a subset of the above array where the elements have an area smaller or equal to 100
*/

function filterArr(arr){
  return arr.filter(x => x.height * x.width <= 100)
}

console.log(filterArr(mappings));

/*
11. Implement a function called reject, which receives an array and an iterator function.
The iterator function receives each element in the array as a parameter and must return true or false. 
If it returns true, the element will not be included by the parent function in the resulting array.
If returns false it will be included.
*/

function reject(arr, iterator = x => x.height >= 10){
  return arr.filter(x => !iterator(x));
}
console.log(reject(mappings)); // return an array of objects with height < 10

/*
12. Write a function that return the element with the color 'magenta', null otherwise.
*/

function findColor(arr, color) {
  return arr.find(x => x.color === color) ?? null;
}

console.log(findColor(mappings, 'magenta'));

/*
13. Write a function that returns true if all elements in the array have the area > = 10, false otherwise.
*/

function calculateArea(obj) {
  return obj.width * obj.height;
}

function getAreasAreBigger(arr, minArea) {
  return arr.every(x => calculateArea(x) >= minArea);
}

console.log(getAreasAreBigger(mappings, 10))

/*
14. Write a function that returns true if at least one of the array elements has the color 'green'; false otherwise.
*/

function returnAtLeastOneIsOfColor(arr, color) {
  return arr.some(x => x.color === color);
}

console.log(returnAtLeastOneIsOfColor(mappings, 'balarie'));

/*
15. Write a function that returns the total distance (the sum of the element distances).
*/

function getTotalDistance(arr) {
  return arr.reduce((sum, x) => sum + x.distance, 0);
}

console.log('Sum of distances: ', getTotalDistance(mappings));

/*
16. Write a function that returns an object that counts how many times each color appears in the object array. {red: 2, blue: 1, etc ...}
*/

function getNumberOfColors(arr) {
  return arr.reduce((acc, x) => {
    acc[x.color] = (acc[x.color] ?? 0) + 1;
    return acc;
  }, {});
}
 
console.log('Number of colors: ', getNumberOfColors(mappings));

/*
17. Write a function that returns an array with all elements having a unique color. Any element after the first one that has a color that would repeat is not included in the array.
*/

function getUniqueColors(arr) {
  const seen = new Set();
  return arr.filter(x => {
    if (seen.has(x.color)) return false;
    seen.add(x.color);
    return true;
  });
}

console.log('Unique Colors: ', getUniqueColors(mappings));

/*
18. Write a function which inverts two numbers.
*/
let a = 5, b = 8;

// a = a + b
// b = a - b
// a = a - b

[a, b] = [b, a]
console.log('A:', a, 'B:', b);

/*
19. Using the array below, get a variable that contains an array of objects structured like this:
[
  {subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick'},
  ...
]
*/
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const objClasses = classes.map(([subject, time, teacher]) => ({subject, time, teacher}));

console.log(objClasses);