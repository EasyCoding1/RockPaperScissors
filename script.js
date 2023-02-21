const co1 = "Rock";
const co2 = "Paper";
const co3 = "Scissors";




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

const computerChoice = getComputerChoice();

 



const po1 = "Rock";
const po2 = "Paper";
const po3 = "Scissors";
function getPlayerChoice () {
    let answer = prompt("Select your choice. Enter: 'Rock' , 'Paper', or 'Scissors' ");
    while (answer != "Rock" &&  answer !== "Paper" && answer !== "Scissors") {
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
    
    
const playerChoice = getPlayerChoice();
console.log("Player Choice: " + playerChoice);
console.log("Computer Choice: " + computerChoice);


const result1 = "This one is a Draw!"
const result2 = "You lose..."
const result3 = "You win!"

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

let result = playRound(computerChoice, playerChoice);
console.log(result);



/*
let playerScore = 0;
let computerScore = 0;
function changeScore*/
