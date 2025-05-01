//exercise 5: Do While Loops//

//1.//
let result9 = "";
let iXZ = 1;

do {
    result9 += iXZ + " ";
    iXZ++;
} while (iXZ <=10);
console.log(result9.trim());

//2.//
let result10 = 0;
let iXX = 1;

do {result10 += iXX;
    iXX++;
    
} while (iXX <= 100);
console.log("The sum of all numbers from 1 to 100 is:", result10);
