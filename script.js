function getComputerChoice () {
    if (Math.random() <= 0.33) {
        return "Rock";
    } else if (Math.random() > 0.33 && Math.random() <= 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice () {
    let input = prompt("Choose between rock, paper, or scissors.");
    input = input.toLowerCase();

    switch (input) {
        case "rock":
            return "Rock";
        case "paper":
            return "Paper";
        case "scissors":
            return "Scissors";
        default:
            return "Invalid";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let message = "";

    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        message = "You win! Rock beats Scissors!";
        humanScore += 1;
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        message = "You lose! Paper beats Rock!";
        computerScore += 1;
    } else if (humanChoice === "Rock" && computerChoice === "Rock") {
        message = "It's a draw!";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        message = "You win! Scissors beats Paper!";
        humanScore += 1;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        message = "You lose! Rock beats Scissors!";
        computerScore += 1;
    } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        message = "It's a draw!";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        message = "You win! Paper beats Rock!";
        humanScore += 1;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        message = "You lose! Scissors beats Paper!";
        computerScore += 1;
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
        message = "It's a draw!";
    }

    return console.log(message + " Computer choice: " + computerChoice);
}

// function playGame () {
//     const roundNum = 5;
//     let ctr = 0;
//     while (!(humanScore == 5 || computerScore == 5)) {

//             console.log(`Round ${ctr + 1}:`);
//             const humanChoice = getHumanChoice();
//             if (humanChoice === "Invalid") {
//                 console.log("Invalid choice. Please choose Rock, Paper, or Scissors.");
//                 console.log("");
//                 continue;
//             }
//             const computerChoice = getComputerChoice();
//             console.log("You chose: " + humanChoice);
//             console.log("Computer chose: " + computerChoice);
//             console.log(playRound(humanChoice, computerChoice));
//             console.log("");

//             ctr = ctr + 1;

//             console.log(`Current Scores - Human: ${humanScore} | Computer: ${computerScore}`);
//             console.log('')

//     }

//     console.log(`Final Scores - Human: ${humanScore} | Computer: ${computerScore}`);
// }

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const container = document.querySelector("#container")
const scoreContainer = document.querySelector("#score-container");

rock.addEventListener("click", () => {
    playRound("Rock", getComputerChoice())

    scoreContainer.innerHTML = "";

    const runningScore = document.createElement("p");
    runningScore.textContent = `Human score: ${humanScore} | Computer score: ${computerScore}`;
    
    scoreContainer.appendChild(runningScore);

    setTimeout(() => {
        if (humanScore == 5) {
            alert('You won!');
        } else if (computerScore == 5) {
            alert('Computer won!');
        }
    }, 100);
})

paper.addEventListener("click", () => {
    playRound("Paper", getComputerChoice())

    scoreContainer.innerHTML = "";

    const runningScore = document.createElement("p");
    runningScore.textContent = `Human score: ${humanScore} | Computer score: ${computerScore}`;
    
    scoreContainer.appendChild(runningScore);

    setTimeout(() => {
        if (humanScore == 5) {
            alert('You won!');
        } else if (computerScore == 5) {
            alert('Computer won!');
        }
    }, 100);
})

scissors.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice())

    scoreContainer.innerHTML = "";

    const runningScore = document.createElement("p");
    runningScore.textContent = `Human score: ${humanScore} | Computer score: ${computerScore}`;
    
    scoreContainer.appendChild(runningScore);

    setTimeout(() => {
        if (humanScore == 5) {
            alert('You won!');
        } else if (computerScore == 5) {
            alert('Computer won!');
        }
    }, 100);
})
