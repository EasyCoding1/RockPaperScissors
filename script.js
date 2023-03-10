/*const co1 = "Rock";
const co2 = "Paper";
const co3 = "Scissors";


const po1 = "Rock";
const po2 = "Paper";
const po3 = "Scissors";

const result1 = "This one is a Draw!"
const result2 = "You lose..."
const result3 = "You win!"



function getPlayerChoice () {
    let answer = prompt("Select your choice. Enter: 'Rock' , 'Paper', or 'Scissors' ");
    while (answer !== "Rock" &&  answer !== "Paper" && answer !== "Scissors") {
      answer = prompt("Sorry, please enter exactly 'Rock' , 'Paper', or 'Scissors'");
        } 
    if (answer == "Rock"){
        return po1;
    } else if (answer == "Paper") {
        return po2;
    }  else {
        return po3;
     }
} 



function getComputerChoice() {
    const randomnumber = Math.floor((Math.random() * 3));
        if (randomnumber === 0) {
          return co1;
        } else if (randomnumber === 1) {
             return co2;
        } else {
            return co3;
    }
}







function playRound (computerChoice, playerChoice){
   if (computerChoice == co1 && playerChoice == po1) {
        return result1
    } else if (computerChoice == co1 && playerChoice == po2) {
        return result3
    } else if (computerChoice == co1 && playerChoice == po3) {
        return result2
    }   else if (computerChoice == co2 && playerChoice == po1) {
        return result2
    }   else if (computerChoice == co2 && playerChoice == po2) {
        return result1
    }   else if (computerChoice == co2 && playerChoice == po3) {
        return result3
    }   else if (computerChoice == co3 && playerChoice == po1) {
        return result3
    }    else if (computerChoice == co3 && playerChoice == po2) {
        return result2
    }   else if (computerChoice == co3 && playerChoice == po3) {
        return result1
    }
}


function newRound(playerScore, computerScore) {
    while (playerScore < 5 && computerScore < 5) {
        const computerChoice = getComputerChoice();
        const playerChoice = getPlayerChoice();
        console.log("Player Choice: " + playerChoice);
        console.log("Computer Choice: " + computerChoice);

        const result = playRound(computerChoice, playerChoice);
        console.log(result);

        if (result === result2){
            computerScore++;
        } else if (result === result3){
            playerScore++;
        }

        const score = "Player Score : " + playerScore + " | " + "Computer Score : " + computerScore;
        console.log(score);
    }
    
    return endofgame(playerScore, computerScore);
}

const playAgainYes = "Yes";
const playAgainNo = "No";

function endofgame(playerScore, computerScore) {
    let playAgain;
    if (playerScore == 5) {
      playAgain = prompt("You are Victorious. Write 'Yes' to play Again or 'No' to Stop playing");
    } else if (computerScore == 5) {
      playAgain = prompt("You have been defeated, but there is still hope. Write 'Yes' to Try Again or 'No' to Stop playing.");
    }
  
    if (playAgain && playAgain.toLowerCase() === playAgainYes.toLowerCase()) {
      return true;
    } else if (playAgain && playAgain.toLowerCase() === playAgainNo.toLowerCase()) {
      return false;
    } else {
      do {
        playAgain = prompt("I didn't get that, please write exactly 'Yes' or 'No'");
      } while (playAgain.toLowerCase() != playAgainYes.toLowerCase() && playAgain.toLowerCase() != playAgainNo.toLowerCase());
      if (playAgain.toLowerCase() === playAgainYes.toLowerCase()) {
        return true;
      } else if (playAgain.toLowerCase() === playAgainNo.toLowerCase()) {
        return false;
      }
    }
  }

let playAgain = true;
while (playAgain) {
    playAgain = newRound(0, 0);
}


/* ADVICE FROM GUY ON DISCORD.
So if you examine your endofgame function, there's an outcome for if the player won or the computer won. Notice in your newRound function you already have it so that the game stops when either the player or computer has five points. This leaves the third part of your if structure, the one with "I didn't get that...", unreachable, because you'll never end a game in which neither the player nor the computer has five points.*/ 


console.log('hello');


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('Hello world');
  });
});