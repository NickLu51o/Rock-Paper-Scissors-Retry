// global variables
const choices = ["rock", "paper", "scissors"];
const computerSelection = computersChoice();
const playerSelection = playersChoice();

function computersChoice() {
    // Creates a random input from the computer
    return choices[Math.floor(Math.random()*3)];
}


function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a tie"
    }
    else if (result == "Player") {
        return `You won this round! ${playerSelection} beats ${computerSelection}`
    }
    else if (result == "Computer") {
        return `You lost this round! ${computerSelection} beats ${playerSelection}`
    }
}

function checkWinner(playerSelection, computerSelection){

    if (playerSelection==computerSelection) {
        return "Tie"
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "rock") || 
        (playerSelection == "scissors" && computerSelection == "paper") 
    ) {
        return "Player"
    }
    else {
        return "Computer"
    }
}

function playersChoice() {
    // gets player's input
    let input = prompt ("Type rock, paper, or scissors");
    input = input.toLowerCase();
    return input
}

function game() {
   let scorePlayer = 0;
   let scoreComputer = 0;
   
    for (let i = 0; i < 5; i++) {
        const playerSelection = playersChoice();
        const computerSelection = computersChoice();
        console.log(playRound(playerSelection, computerSelection))
        if (checkWinner(playerSelection, computerSelection) == "Player") {
            scorePlayer++
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer") {
            scoreComputer++
        }
    }

    if (scorePlayer > scoreComputer) {
        console.log("Player Wins the game")
    }
    else if (scorePlayer < scoreComputer) {
        console.log("Computer wins the game")
    }
    else {
        console.log("we have a tie")
    }
    
}


console.log(playRound(playerSelection, computerSelection));
game()