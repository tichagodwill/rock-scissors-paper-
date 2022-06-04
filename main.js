
let signIn = prompt("What's your sign?");

if (signIn.toLowerCase() === "rock") {
  alert("Wow! Welcome to the game!");
}

const game = () => {
  let pScore = 0;
  let cScore = 0;

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");

    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerSelection = computerOptions[computerNumber];

        setTimeout(() => {
          //Here is where we call play rounds
          playRound(this.textContent, computerSelection);
        }, 2000);
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const playRound = (playerSelection, computerSelection) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerSelection === computerSelection) {
      winner.textContent = "It is a tie";
      return;
    }
    //Check for Rock
    if (playerSelection === "rock") {
      if (computerSelection === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerSelection === "paper") {
      if (computerSelection === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Is call all the inner function

  playMatch();
};

//start the game function
game();
