//exercise 4: While Loops//

//1.//
let iX = 1;
let result6 ="";

while (iX <= 10){
    result6 += iX + " ";
    iX++;
}
console.log("Count to ten:", result6.trim());

//2.//
let iY = 1;
let result7 = "";

while (iY <= 20) {
    if(iY % 2 === 0){
        result7 += iY + " ";
    }
    iY++;
}
console.log("Even numbers:", result7.trim());

//3.//
let total = 0;
let iZ = 1;

while (iZ <= 100) {
    total += iZ;
    iZ++;
}
console.log("Thes sum of all numbers from 1 to 100 is:", total);

//4.//
let result8 = "";
let iXY = 1;

while(iXY < 50){
    if (iXY % 5 === 0){
        result8 += iXY + " ";
    }
    iXY++;
}
console.log("Multiples of 5:", result8);