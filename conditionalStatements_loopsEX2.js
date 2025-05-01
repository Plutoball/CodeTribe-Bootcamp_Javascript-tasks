//exercise 2: Divisibility Check//

//using if-else statements//
let iValue = 21;

if (iValue % 2 === 0 && iValue % 3 === 0){
    console.log("Divisible by both.");
} else if (iValue % 2 === 0){
    console.log("Divisible by 2 only.");
} else if (iValue % 3 === 0){
    console.log("Divisible by 3 only.");
} else {
    console.log ("Not divisible by 2 or 3.")
}

// using switch statements//
switch (true) {
    case (iValue % 2 === 0 && iValue % 3 === 0):
        console.log("Divisible by both 2 and 3.");
        break;
    case (iValue % 2 === 0):
        console.log("Divisible by 2 only.");
        break;
    case (iValue % 3 === 0):
        console.log("Divisible by 3 only.");
        break;    
    default:
        console.log("Not divisible by 2 or 3.");
        break;
}