let getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor( Math.random() * 3 )];
}
let testPlayerChoice = (choice) => {
    return choice == "rock" || choice == "paper" || choice == "scissors";
}

let getPlayerChoice = () => {
    let quit = 0;
    let playerChoice = prompt("Make your choice");
    while ( playerChoice === null || !testPlayerChoice(playerChoice.toLowerCase()) ){
        playerChoice = prompt("Make a new choice. It must be rock, paper, or scissors.");
    }
    return playerChoice.toLowerCase();
}

let checkWinner = (playerChoice, computerChoice) => {
    let win;
    switch (playerChoice) {
        case "rock":
            win = computerChoice == "scissors";
            break;
        case "paper":
            win = computerChoice == "rock";
            break;
        case "scissors":
            win = computerChoice == "paper";
    }
    return win;
}

let playRound = (playerChoice, computerChoice) => {
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    console.log(`Player: ${playerChoice}.  Computer: ${computerChoice}.`);
    return playerChoice == computerChoice ? "tie" : checkWinner(playerChoice, computerChoice);
}

let playGame = () => {
    let playerScore = 0;
    let computerScore = 0;
    while ( playerScore < 5 && computerScore < 5 ) {
        let roundScore = playRound();
        roundScore == "tie" ? console.log("It's a tie!") : roundScore ? playerScore++ : computerScore++;
        console.log(`Player: ${playerScore}. Computer: ${computerScore}.`);
    };
    alert(playerScore == 5 ? "Player Wins!" : "Computer Wins!");
}