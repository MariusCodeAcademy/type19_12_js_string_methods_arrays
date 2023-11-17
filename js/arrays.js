'use strict';
console.log('arrays.js file was loaded');

//               0       1        2
const myArr = ['red', 'green', 'blue'];
console.log('myArr ===', myArr);

// prideti juoda spalva i gala
myArr.push('black', 'white');
console.log('myArr after push ===', myArr);

// prideti 'violet' i prieki
myArr.unshift('violet', 'pink');
console.log('myArr after unshift ===', myArr);

// suzinoti masyo ilgi?
console.log('myArr.length ===', myArr.length);

// nuimti paskutini el
let popRez = myArr.pop();
console.log('myArr after pop ===', myArr);
console.log('popRez ===', popRez);

//    index       0       1       2       3        4      5
let colors = ['violet', 'pink', 'red', 'green', 'blue', 'black'];

// gauti tik ['pink', 'red', 'green']
let threeCols = colors.slice(1, 4);
console.log('threeCols ===', threeCols);
console.log('colors ===', colors);

// Splice
//array.splice(index, howmanyDelete, item1, ....., itemX)
// vietoj 'pink', 'red' ideti 'tomato'
colors.splice(1, 2, 'tomato');
console.log('colors po splice ===', colors);

let strFromArr = colors.join(',');
console.log('strFromArr ===', strFromArr);

const str = 'The quick brown fox jumps over the lazy dog over again';
console.log('str ===', str);

let wordsArrFromStr = str.split(' ');
let lettersArrFromStr = str.split('');

console.log('wordsArrFromStr ===', wordsArrFromStr);
console.log('lettersArrFromStr ===', lettersArrFromStr);

colors = ['violet', 'pink', 'red', 'green', 'blue', 'black'];
// ar yra 'blue' elementas masyve
let yraBlue = colors.includes('blue');
console.log('yraBlue ===', yraBlue);
