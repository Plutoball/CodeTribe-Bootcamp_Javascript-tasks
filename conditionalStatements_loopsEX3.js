//exercise 3: For Loops//

//1.//
let result1 = "";

for (let index = 1; index <= 10; index++) {
    result1 += index + " ";   
}
console.log("Count to ten:",result1.trim());

//2.//
let result2 ="";

for (let index = 1; index <= 20; index++) {
    if (index % 2 === 0) {
        result2 += index + " ";
    }
}
console.log("Even numbers:", result2.trim());

//3.//
let result3 = 0;

for (let index = 1; index <= 100; index++) {
    result3 += 1;
}
console.log("The sum of all numbers from 1 to 100 =", result3);

//4.//
const numbers1 = [1, 2, 3, 4, 5];

for (let index = 0; index < numbers1.length; index++){}
const result4 = numbers1.join(" ");
console.log(result4);

//5.//
const numbers2 = [3, 7, 2, 5, 10, 6];

for (let index = 0; index < numbers2.length; index++){}
const result5 = numbers2.join(" ");
const largestNum = Math.max(...numbers2)
console.log("The lagrestst number in sequence:", result5, "is", largestNum);