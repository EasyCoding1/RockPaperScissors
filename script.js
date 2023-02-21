const co1 = "Rock";
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
    if (playerScore == 5) {
       let playAgain = prompt("You are Victorious. Write 'Yes' to play Again");
       return playAgain.toLowerCase() === playAgainYes.toLowerCase();
    } else if (computerScore == 5){
        let playAgain = prompt("You have been defeated, but there is still hope. Write 'Yes' to Try Again.");
        return playAgain.toLowerCase()  === playAgainYes.toLowerCase();
    } else {
        let playAgain = prompt("I didn't get that, please write exactly 'Yes' or 'No' ");
        return playAgain.toLowerCase()  === playAgainYes.toLowerCase();
    }
}

let playAgain = true;
while (playAgain) {
    playAgain = newRound(0, 0);
}



