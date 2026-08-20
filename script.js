let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100) % 3;
    console.log(randomNumber);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "scissors";
    } else if (randomNumber === 2) {
        return "paper";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice:");

    console.log(humanChoice);

    return humanChoice;
}