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
console.log("Computer choice: " + computerChoice);

 




function getPlayerChoice () {
    let answer = prompt("Select your choice. Enter: 'Rock' , 'Paper', or 'Scissors' ");
    while (answer != "Rock" &&  answer !== "Paper" && answer !== "Scissors") {
      answer = prompt("Sorry, please enter exactly 'Rock' , 'Paper', or 'Scissors'");
        } 
    return answer;
    } 
    
    
const playerChoice = getPlayerChoice();
console.log("Player Choice: " + playerChoice);


