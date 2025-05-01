//exercise 5: Do While Loops//

//4. simple guessing game where the user must guess a number between 1 and 10.//
const secretNumber = Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10
let userGuess;

do {
    userGuess = parseInt(prompt("Guess a number between 1 and 10:"));
} while (userGuess !== secretNumber);

console.log("Congratulations! You guessed the correct number:", secretNumber);
