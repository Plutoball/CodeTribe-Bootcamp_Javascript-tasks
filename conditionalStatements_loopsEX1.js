//exercise 1: Temperature check//

//using if-else statements//
let temp = 20;

if (temp < 0){
    console.log("It's freezing.");
} else if (temp >= 0 && temp <= 15){
    console.log("It's cold.");
}else if (temp >= 16 && temp <= 25){
    console.log("It's mild.");
}else {
    console.log("It's warm.");
}

//using switch statements//
switch(true){
    case(temp < 0):
     console.log("It's freezing.");
     break;
    case(temp >= 0 && temp <= 15):
     console.log("It's cold.");
     break;
    case(temp >= 16 && temp <= 25):
     console.log("It's mild.");
     break;
    default:
     console.log("It's warm.");
}