/*
0. In your HTML, import this JavaScript file. Bonus points: try to do it from the <head> without blocking the <body> rendering.
*/



/*
1. Variable scopes: based on MDN, make an example how function scope, block scope, and global scope:
* https://developer.mozilla.org/en-US/docs/Glossary/Scope
*/


function scopeExercise() {

}

console.log('Scope exercise:', scopeExercise());

/*
2. Strings: Display the bio of Ada Lovelace in the form of "Hello, my name is Ada Lovelace, I was born 36 years ago."
*/
const firstName = 'Ada';
const lastName = 'Lovelace';
const age = 36;

console.log('Bio:');

/*
3. Objects: Declare an object, access/update properties, add a new property, delete a property, and iterate keys.
*/
const person = {
  name: 'Ada',
  age: 36,
  skills: ['math', 'programming'],
  address: { city: 'London', country: 'UK' }
};

console.log('Log the person`s name and city:');
console.log('Update age:', /* update age to 37 and log the object */);
console.log('Add role:', /* add a "role" property, set a string value and log */);
console.log('Delete country:', /* delete country and log the object */);
console.log('Iterate keys:', /* iterate over the object's keys and values and log them */);

/*
4. Write a function that makes a string sentence cased - starts with capital letter and ends with "."
* Don't focus on edge cases for now (like multiple spaces, punctuation, etc), it needs only to handle this string.
*/
const sentence = '   hello there GENERAL KENOBI   ';

console.log('Sentence-cased sentence:', /* toSentenceCase(sentence) */ sentence);

const greeting = 'Ho Ho Ho! Merry Christmas!';
/*
5. Iterate the greeting, log the current character, index and 🎅.
*/
console.log('Indexed iteration:', /* implement string iteration */ greeting);

/** Array Methods **/
/*
6. Write a function that receives the array below as parameters and returns a new array which has all the elements added with 2
*/
var strArr = ['13', '2', '34', '14', '5', '86', '3.46'];

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


console.log(pluck(mappings, 'color'));  // => ['magenta', 'red', 'green' .......];

/*
9. Implement a function that returns the area of all elements in the above array, area = height * width.
*/
console.log(calculateArea(mappings));

/*
10. Write a function that returns a subset of the above array where the elements have an area smaller or equal to 100
*/
console.log(filterArr(mappings));

/*
11. Implement a function called reject, which receives an array and an iterator function.
The iterator function receives each element in the array as a parameter and must return true or false. 
If it returns true, the element will not be included by the parent function in the resulting array.
If returns false it will be included.
*/
console.log(reject(mappings, iterator)); // return an array of objects with height < 10

/*
12. Write a function that return the element with the color 'magenta', null otherwise.
*/
console.log(findColor(mappings, 'magenta'));

/*
13. Write a function that returns true if all elements in the array have the area > = 10, false otherwise.
*/
console.log(getAreasAreBigger(mappings, 10))

/*
14. Write a function that returns true if at least one of the array elements has the color 'green'; false otherwise.
*/
console.log(returnAtLeastOneIsOfColor(mappings, 'balarie'));

/*
15. Write a function that returns the total distance (the sum of the element distances).
*/
console.log('Sum of distances: ', getTotalDistance(mappings));

/*
16. Write a function that returns an object that counts how many times each color appears in the object array. {red: 2, blue: 1, etc ...}
*/
console.log('Number of colors: ', getNumberOfColors(mappings));

/*
17. Write a function that returns an array with all elements having a unique color. Any element after the first one that has a color that would repeat is not included in the array.
*/
console.log('Unique Colors: ', getUniqueColors(mappings));

/*
18. Write a function which inverts two numbers.
*/
let a = 5, b = 8;

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

const objClasses = [];

console.log(objClasses);