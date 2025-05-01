//exercise 1: numbers//

var integer = 10;
var floating = 10.5;

let iAdd = integer + floating;
let iSub = floating - integer;
let iMulti = floating * 100;
let iDivi = integer - 6;
let iMod = integer % 2;
let iExpo = integer ** 10;

console.log(integer);
console.log(floating);
console.log(iAdd);
console.log(iSub);
console.log(iMulti);
console.log(iDivi);
console.log(iMod);
console.log(iExpo);

//exercise 2: boolean and operators//

//1.//
let inum1 = 10;
let inum2 = 20;

let isEqual = inum1 === inum2;
let isNotEqual = inum1 !== inum2;
let isGreater = inum2 > inum1;
let isLess = inum1 < inum2;

console.log(inum1,"is equal to ", inum2, isEqual);
console.log(inum1, "is not equal to " , inum2, isNotEqual);
console.log(inum2, "is greater than" , inum1, isGreater);
console.log(inum1, "is less than" , inum2, isLess);

//2. (I had to rename x to ix to fix a syntax error)//
let ix = 8;
let y = 12;

let iGreater = ix > y ;
let iLessOrEqual = ix <= y ;
let iEqual = ix === y;
let iNotEqual = ix !== y;

console.log(ix, "is greater than" , y, iGreater);
console.log(ix, "is less than or equal to" , y, iLessOrEqual);
console.log(ix, "is equal to" , y, iEqual);
console.log(ix, "is not equal to" , y, iNotEqual);

//3.//
let A = true;
let B = false;

let andResult = A && B;
let andOR = A || B;
let notA = !A;

console.log("A and B:", andResult);
console.log("A or B:", andOR);
console.log("not A:", notA);

//4.//
let p = 10;

let asADD = p += 2;
let asSUB = p -= 4;
let asMULTI = p *= 7;
let asDIVI = p /= 3;
let asMOD = p %= 2;

console.log(p);
console.log(p, "+ 2 =", asADD);
console.log(p, "- 4 =", asSUB);
console.log(p, "x 7 =", asMULTI);
console.log(p, "/ 3 =", asDIVI);
console.log("2 % of", p, "is", asMOD);