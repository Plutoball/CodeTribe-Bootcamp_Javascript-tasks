// Declartion
const cardSymbols = ["A", "B", "C", "D", "E", "F", "G", "H"];
const fullDeck = [...cardSymbols, ...cardSymbols]; // Creates pairs
const gameBoard = document.getElementById("game-board");
let flippedCards = [];
let matchedPairs = 0;
let timeElapsed = 0; // Start stopwatch at 0
let timerRunning = false;
let timerInterval;

// Function to format time in MM:SS format
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    // Use padStart to ensure two digits for both minutes and seconds
    return minutes.toString().padStart(2, '0') + ":" + remainingSeconds.toString().padStart(2, '0');
  }

// Function to start the game
function startGame() {
    if (timerRunning) return; // Prevent multiple timers

    timerRunning = true;
    timeElapsed = 0; //Start at 0 seconds
    document.getElementById("stopWatch").textContent = "Time : " + formatTime(timeElapsed);

    //Track attemps
    let attemptsElement = document.getElementById("attempts");
    let attempts = parseInt(attemptsElement.textContent) || 0; // Get current attempts or 0
    attemptsElement.textContent = attempts + 1; // Increment attempts

    timerInterval = setInterval(function() {
        timeElapsed++; //Increase time every second
        document.getElementById("stopWatch").textContent = "Time : " + formatTime(timeElapsed);
    }, 1000);
}
  
// Combined flipCard function with timer start check
function flipCard() {
    // if the game hasn't starte yet, start it on the first card click
    if (!timerRunning) {
        startGame();
    }
    // Process flip if card is not already flipped and less than 2 cards are active
    if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
        this.textContent = this.dataset.symbol; // Show symbol
        this.classList.add("flipped"); // Add flipped state (and rotation via CSS)
        flippedCards.push(this); // Add to flipped cards array
    }
    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 800); // Check for match after 0.8 seconds
    }
}

// Function to create (or recreate) cards
function createCards () {
    gameBoard.innerHTML = ""; // Clear the board
    //Shuffle cards each time
    fullDeck.sort(() => Math.random() - 0.5); 
    fullDeck.forEach((symbol, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.symbol = symbol; // Store symbol in data attribute
        card.dataset.index = index; // Store index in data attribute
        card.textContent = "?"; // Initial text
        // Attach event listener that calls flipCard function
        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    });
}

//Initial card creation on page load
createCards(); 

// Function to check for matching pairs
function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.symbol === card2.dataset.symbol) {
        // If they match, keep them flipped and reset flippedCards
        matchedPairs++;
    } else {
        // If they don't match, flip them back after a short delay and remove styling
        card1.textContent = "?";
        card2.textContent = "?";
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
    }
    flippedCards = []; // Reset flipped cards array
    
    //Update the score display
    document.getElementById("score").textContent = matchedPairs;

    //if all pairs are matched, stop the timer and show win modal
    if (matchedPairs === fullDeck.length / 2) {
       clearInterval(timerInterval); // Stop the timer
       showWinModal(); // Show win modal
    }    
}

// Function to show win modal
function showWinModal() {
    document.getElementById("win-modal").style.display = "block"; // Show win modal
    document.getElementById("game-container").classList.add("blur-background"); // Apply blur effect
    // update modal content with final stats:
    document.getElementById("final-score").textContent = matchedPairs;
    document.getElementById("final-time").textContent = formatTime(timeElapsed);
  }

//Reset game function (reset cards and timer not attempts)
function resetGame() {
    matchedPairs = 0;
    flippedCards = [];
    timeElapsed = 0; 
    timerRunning = false;
    
    document.getElementById("stopWatch").textContent = "Time: 00:00";
    document.getElementById("score").textContent = "0"; // Reset score; do not reset attempts

    //Recreate the game with new cards
    createCards();
    // Remover blur effect from game container
    document.getElementById("game-container").classList.remove("blur-background");
}

//--Modal event listeners--//

// Show welcome modal on first load if attempts are 0
document.addEventListener("DOMContentLoaded", function () {
    const attemptsElement = document.getElementById("attempts");
    if (parseInt(attemptsElement.textContent) === 0) {
      document.getElementById("welcome-modal").style.display = "block"; // Show welcome modal
      document.getElementById("game-container").classList.add("modal-active"); // Optionally blur background
    }
  });
  
  // Close welcome modal when "Play" is clicked, and remove any blur
  document.getElementById("play-button").addEventListener("click", function () {
    document.getElementById("welcome-modal").style.display = "none";
    document.getElementById("game-container").classList.remove("modal-active");
  });
  
  // Restart game when the win modal's "Restart" button is clicked
  document.getElementById("restart-button").addEventListener("click", function () {
    document.getElementById("win-modal").style.display = "none";
    resetGame();
  });