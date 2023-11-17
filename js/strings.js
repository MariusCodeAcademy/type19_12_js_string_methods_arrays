'use strict';
console.log('strings.js file was loaded');
//                    10        20
//           012345678901234567890123456789
const str = 'The quick brown fox jumps over the lazy dog over again';

console.log('str ===', str);
console.log('str.charAt(0) ===', str.charAt(0));

// gauti zodi 'quick'
// slice(start, end)
const rez1 = str.slice(4, 9);
console.log('rez1 ===', rez1);

// gauti dog
const rez2 = str.slice(-3);
console.log('rez2 ===', rez2);

// str.replace('ka', 'i ka') - pakeisti pirma pasitaikiusi stringa
// pakeisti 'brown' i 'tomato'
// atspausdinam rezultata

// pakeisti abu over zodelius su kazuo, kazkaip 'again'
