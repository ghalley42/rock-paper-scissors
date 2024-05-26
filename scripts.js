const options = ["rock", "paper", "scissors"];
const imageSources = {
    "rock": "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3bdb2575-9a92-42f8-8472-bb78c7bd118a_720x405.jpeg",
    "paper": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrIUy48U1C8Yetmv-aeKpAMbNgrJliB4gHKA&usqp=CAU",
    "scissors": "https://content.etilize.com/images/900/1069598981.jpg"
}
// Create the img tags to show current round choices
const playerImage = document.createElement("img"); 
const computerImage = document.createElement("img"); 

const playerSide = document.querySelector('div.player-choice');
const computerSide = document.querySelector('div.computer-choice');
const newGame = document.querySelector("button");
const playerScoreCounter = document.querySelector("#player-score");
const computerScoreCounter = document.querySelector("#computer-score");
const roundCounter = document.querySelector('span.round-counter');

let playerScore = 0;
let computerScore = 0;

newGame.addEventListener("click", () => resetBoard());

const resetBoard = () => {
    playerScoreCounter.textContent = 0;
    computerScoreCounter.textContent = 0;
    computerSide.removeChild(computerSide.firstElementChild);
    playerSide.removeChild(playerSide.firstElementChild);
    roundCounter.textContent = 1;
    playerScore = 0;
    computerScore = 0;
}

const getComputerChoice = () => {
    return options[Math.floor( Math.random() * 3 )];
}

const checkRoundWinner = (playerChoice, computerChoice) => {
    switch (playerChoice) {
        case "rock":
            return win = computerChoice == "scissors";
        case "paper":
            return win = computerChoice == "rock";
        case "scissors":
            return win = computerChoice == "paper";
    }
}

const checkGameWinner = () => {
    if ( playerScore < 5 && computerScore < 5 ) return;
    playerScore == 5 ? alert('Player Wins! Good Game :)') : alert('Computer Wins! Better Luck Next Time!');
    resetBoard();
}

const updatePlayerImages = (player, computer) => {
    playerImage.src = imageSources[player];
    computerImage.src = imageSources[computer];
    playerSide.append(playerImage);
    computerSide.append(computerImage);
    setTimeout(() => {
        computerSide.removeChild(computerSide.firstElementChild);
        playerSide.removeChild(playerSide.firstElementChild);
    }, 1300)
};

const updateScore = (winner) => {
    if (winner == "tie") return; 
    winner ? playerScoreCounter.textContent = Number(playerScoreCounter.textContent) + 1 : computerScoreCounter.textContent = Number(computerScoreCounter.textContent) + 1;
    winner ? playerScore++ : computerScore++;
}

const playRound = (playerChoice, computerChoice) => {
    console.log(`Player: ${playerChoice}.  Computer: ${computerChoice}.`);
    updatePlayerImages(playerChoice, computerChoice);
    let result = playerChoice == computerChoice ? "tie" : checkRoundWinner(playerChoice, computerChoice);
    updateScore(result);
    setTimeout(() => {
        if ( result != "tie" ) roundCounter.innerHTML = Number(roundCounter.innerHTML) + 1;
    }, 1300);
    checkGameWinner();
}

const playerMoves = document.querySelectorAll("img.btn");

playerMoves.forEach((button) => {
    button.addEventListener("click", (e) => playRound(e.target.id, getComputerChoice()));
});