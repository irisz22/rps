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

    switch (humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    console.log("Tied! You and Computer both put rock.");
                    break;
                case "paper":
                    console.log("You lose! Paper beats Rock.");
                    computerScore++;
                    break;
                case "scissors":
                    console.log("You win! Rock beats Scissors.");
                    humanScore++;
                    break;
            }
            break;

        case "paper":
            switch(computerChoice) {
                case "rock":
                    console.log("You win! Paper beats Rock.");
                    humanScore++;
                    break;
                case "paper":
                    console.log("Tied! You and Computer both put paper.");
                    break;
                case "scissors":
                    console.log("You lose! Scissors beats Paper.");
                    computerScore++;
                    break;
            }
            break;
        
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    console.log("You lose! Rock beats Scissors.");
                    computerScore++;
                    break;
                case "paper":
                    console.log("You win! Scissors beats Paper.");
                    humanScore++;
                    break;
                case "scissors":
                    console.log("Tied! You and Computer both put scissors.");
                    break;
            }
            break;
    }
}

function playGame() {

    for (let i = 1; i <= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("Final Score");
    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

    if (humanScore > computerScore) {
        console.log("Congrats! You beat the computer!!");
    } else if (humanScore < computerScore) {
        console.log("Oh no! You lost to the computer!");
    } else {
        console.log("It's a draw!");
    }
}

playGame();