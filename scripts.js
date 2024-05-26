const options = ["rock", "paper", "scissors"];
const imageSources = {
    "rock": "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3bdb2575-9a92-42f8-8472-bb78c7bd118a_720x405.jpeg",
    "paper": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrIUy48U1C8Yetmv-aeKpAMbNgrJliB4gHKA&usqp=CAU",
    "scissors": "https://content.etilize.com/images/900/1069598981.jpg"
}
const playerImage = document.createElement("img");
const computerImage = document.createElement("img");

const playerSide = document.querySelector('div.player-choice');
const computerSide = document.querySelector('div.computer-choice');
const newGame = document.querySelector("button");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

newGame.addEventListener("click", () => resetBoard());

const getComputerChoice = () => {
    return options[Math.floor( Math.random() * 3 )];
}

const checkWinner = (playerChoice, computerChoice) => {
    switch (playerChoice) {
        case "rock":
            return win = computerChoice == "scissors";
        case "paper":
            return win = computerChoice == "rock";
        case "scissors":
            return win = computerChoice == "paper";
    }
}

const updatePlayerImages = (player, computer) => {
    playerImage.src = imageSources[player];
    computerImage.src = imageSources[computer];
    playerSide.append(playerImage);
    computerSide.append(computerImage);
}

const updateScore = (winner) => {
    if (winner == "tie") return; 
    return winner ? playerScore.textContent = Number(playerScore.textContent) + 1 : computerScore.textContent = Number(computerScore.textContent) + 1;
}

const playRound = (playerChoice, computerChoice) => {
    console.log(`Player: ${playerChoice}.  Computer: ${computerChoice}.`);
    updatePlayerImages(playerChoice, computerChoice);
    let result = playerChoice == computerChoice ? "tie" : checkWinner(playerChoice, computerChoice);
    updateScore(result);
}

const playGame = () => {
    let playerScore = 0, computerScore = 0;
    while ( playerScore < 5 && computerScore < 5 ) {
        let roundScore = playRound(getPlayerChoice(), getComputerChoice());
        roundScore == "tie" ? console.log("It's a tie!") : roundScore ? playerScore++ : computerScore++;
        console.log(`Player: ${playerScore}. Computer: ${computerScore}.`);
    };
    alert(playerScore == 5 ? "Player Wins!" : "Computer Wins!");
}

const playerMoves = document.querySelectorAll("img.btn");

playerMoves.forEach((button) => {
    button.addEventListener("click", (e) => playRound(e.target.id, getComputerChoice()));
});