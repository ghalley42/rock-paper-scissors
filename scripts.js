const options = ["rock", "paper", "scissors"];

let getComputerChoice = () => {
    return options[Math.floor( Math.random() * 3 )];
}
let testPlayerChoice = choice => options.some( i => i == choice );

let getPlayerChoice = () => {
    let playerChoice = prompt("Make your choice");
    while ( playerChoice === null || !testPlayerChoice(playerChoice.toLowerCase()) ){
        playerChoice = prompt("Make a new choice. It must be rock, paper, or scissors.");
    }
    return playerChoice.toLowerCase();
}

let checkWinner = (playerChoice, computerChoice) => {
    switch (playerChoice) {
        case "rock":
            return win = computerChoice == "scissors";
        case "paper":
            return win = computerChoice == "rock";
        case "scissors":
            return win = computerChoice == "paper";
    }
}

let playRound = (playerChoice, computerChoice) => {
    console.log(`Player: ${playerChoice}.  Computer: ${computerChoice}.`);
    return playerChoice == computerChoice ? "tie" : checkWinner(playerChoice, computerChoice);
}

let playGame = () => {
    let playerScore = 0, computerScore = 0;
    while ( playerScore < 5 && computerScore < 5 ) {
        let roundScore = playRound(getPlayerChoice(), getComputerChoice());
        roundScore == "tie" ? console.log("It's a tie!") : roundScore ? playerScore++ : computerScore++;
        console.log(`Player: ${playerScore}. Computer: ${computerScore}.`);
    };
    alert(playerScore == 5 ? "Player Wins!" : "Computer Wins!");
}