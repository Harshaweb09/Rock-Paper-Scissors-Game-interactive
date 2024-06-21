document.getElementById('start-game').addEventListener('click', startGame);

let playerScore = 0;
let computerScore = 0;
let rounds;
let currentRound = 1;

const choices = ['rock', 'paper', 'scissors'];
const choicesButtons = document.querySelectorAll('.choice');
choicesButtons.forEach(button => button.addEventListener('click', playRound));

function startGame() {
    rounds = parseInt(document.getElementById('rounds').value);
    playerScore = 0;
    computerScore = 0;
    currentRound = 1;

    document.getElementById('player-score').textContent = 'Player: 0';
    document.getElementById('computer-score').textContent = 'Computer: 0';
    document.getElementById('rounds-info').textContent = `Round 1 of ${rounds}`;
    document.getElementById('result-message').textContent = '';
    document.querySelector('.game').classList.remove('hidden');
}

function playRound(event) {
    if (currentRound > rounds) {
        return;
    }

    const playerChoice = event.target.getAttribute('data-choice');
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const resultMessage = document.getElementById('result-message');

    if (playerChoice === computerChoice) {
        resultMessage.textContent = 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        resultMessage.textContent = `You win this round! ${playerChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultMessage.textContent = `You lose this round! ${computerChoice} beats ${playerChoice}.`;
    }

    document.getElementById('player-score').textContent = `Player: ${playerScore}`;
    document.getElementById('computer-score').textContent = `Computer: ${computerScore}`;
    document.getElementById('rounds-info').textContent = `Round ${currentRound} of ${rounds}`;

    if (currentRound === rounds) {
        document.getElementById('result-message').textContent += ` Final Score - Player: ${playerScore}, Computer: ${computerScore}. ${playerScore > computerScore ? 'You win the game!' : 'Computer wins the game!'}`;
    }

    currentRound++;
}
