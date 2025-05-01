//exercise 5: Do While Loops//

//3. Prompt the user to enter a number greater than 10.//
let userInput;

do {
    userInput = prompt("Please enter a number greater than 10:");
} while (userInput <= 10 || isNaN(userInput));
console.log("Thank you you entered:", userInput);