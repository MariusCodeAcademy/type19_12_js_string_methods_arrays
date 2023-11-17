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
let rez3 = str.replace('brown', 'tomato');
// atspausdinam rezultata
console.log('rez3 ===', rez3);
// pakeisti abu over zodelius su kazuo, kazkaip 'again'
let rez4 = str.replaceAll('over', 'again');
console.log('rez4 ===', rez4);

// surasti indexa zodzio fox
let indexFoxStart = str.indexOf('fox');
console.log('indexFoxStart ===', indexFoxStart);

// gauti bet koki zodi tik zinant zodi
// quick
let start = str.indexOf('quick');
let qu = str.slice(start, start + 'quick'.length);
console.log('qu ===', qu);

// ar yra zodis lape
let lapesIndex = str.indexOf('lape');
console.log('lapesIndex ===', lapesIndex);
let lapeRasta = lapesIndex === -1 ? false : true;
// if (lapesIndex === -1) {
//   lapeRasta = false;
// } else {
//   lapeRasta = true;
// }
console.log('lapeRasta ===', lapeRasta);

// ar yra zodis lazy
const isLazy = str.includes('lazy');
console.log('isLazy ===', isLazy);
