const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
  return userInput;
  } else {
  console.log('Error!');
  }
};

//console.log(getUserChoice('Scissors'))
//user choice 확인

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

//console.log(getComputerChoice());
//computer choice 확인

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'The User win!!!!! cool~~'
  }
  if (userChoice === computerChoice) {
    return 'The game was a tie!';
  } else {
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won :(';
      } else {
        return 'Oh Yeah! The user won :)';
      };
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won :(';
      } else {
        return 'Oh Yeah! The user won :)';
      };
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won :(';
      } else {
        return 'Oh Yeah! The user won :)';
      };
    };
  };
};

//console.log(determineWinner('paper', 'scissors'))
//function test


const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();