let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);


/*
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}
*/

const compareGuesses = (userGuess, computerGuess, secretTargetNumber) => {
    if (Math.abs(secretTargetNumber - userGuess) <= Math.abs(secretTargetNumber - computerGuess)) {
        return true;
    } else {
        return false;
    };
}

/*
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess)
    const computerDifference = Math.abs(targetGuess - computerGuess)
    return humanDifference <= computerDifference;
  }
*/

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    };
}

/*
const updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }
*/

const advanceRound = () => currentRoundNumber++;

/*
const advanceRound = () => currentRoundNumber++;
*/