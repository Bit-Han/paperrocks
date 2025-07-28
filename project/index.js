let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	const num = Math.floor(Math.random() * 3);
	if (num === 0) {
		return "scissors";
	} else if (num === 1) {
		return "rock";
	} else {
		return "paper";
	}
}

console.log(getComputerChoice());

function getHumanChoice() {
	const choice = prompt("scissors, paper, or rock?");
	return choice;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanSelection, computerSelection) {
	if (humanSelection === computerSelection) {
		return "tie";
	} else if (humanSelection === "scissors" && computerSelection === "paper") {
		humanScore++;
		return "You win!";
	} else if (humanSelection === "paper" && computerSelection === "rock") {
		humanScore++;
		return "You win!";
	} else if (humanSelection === "rock" && computerSelection === "scissors") {
		humanScore++;
		return "You win!";
	} else {
		computerScore++;
		return "You lose!";
	}
}

console.log(playRound(humanSelection, computerSelection));

function playGame() {
	for (let i = 0; i < 6; i++) {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();
		console.log(playRound(humanSelection, computerSelection));
	}
}

playGame();
console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
