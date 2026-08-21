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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("Tied! You and Computer both put rock" + humanChoice);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    }
}

function playGame() {

    for (let i = 1; i <= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("Congrats! You beat the computer with a score of " + humanScore)
    } else if (humanScore < computerScore) {
        console.log("Oh no! You lost to the computer with a score of " + humanScore)
    }
}

playGame();