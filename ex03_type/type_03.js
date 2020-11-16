// 형 변환(Type Conversion)
// 숫자 -> 문자
let x = 123;
console.log(x); // 123
console.log(String(x)); // 123
console.log(typeof x); //number
console.log(typeof String(x)); // string

console.log('');

// 불린 -> 문자
let y = true;
console.log(y); //true
console.log(String(y)); //true
console.log(typeof y); //boolean
console.log(typeof String(y)); //string

console.log('');

//문자 -> 숫자
let x = '문자';
console.log(x); // 문자
console.log(Number(x)); // NaN(Not a Number)
console.log(typeof x); // string
console.log(typeof Number(x)); // number

console.log('');

//불린 -> 숫자
let y = true;
console.log(y); // true
console.log(Number(y)); // true_1 , false_0
console.log(typeof y); // boolean
console.log(typeof Number(y)); // number

console.log('');

// 문자 -> 불린
let x = '문자';
console.log(x); // 문자
console.log(Boolean(x)); // true 
console.log(typeof x); // string
console.log(typeof Boolean(x)); // boolean

console.log('');

// 숫자 -> 불린
let y = 123; 
console.log(y); // 123
console.log(Boolean(y)); // true 
console.log(typeof y); // number
console.log(typeof Boolean(y)); // boolean

// '', 0, NaN <- false