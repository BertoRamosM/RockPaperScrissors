
//alert("Una inteligencia artificial intenta destruir a la humanidad, gana en este juego a vida o muerte para salvar el destino de la humanidad")
// player choice until line 18
let playerPlays = "";

const buttonRock = document.getElementById("rock");
buttonRock.addEventListener("click", () =>{
  playerPlays = "rock";
 
  round();
  
})
const buttonPaper = document.getElementById("paper");
buttonPaper.addEventListener("click", () =>{
  playerPlays = "paper";
  round();
})
const buttonScissors = document.getElementById("scissors");
buttonScissors.addEventListener("click", () =>{
  playerPlays = "scissors";
  round();
})
// player Choice finish


// computer choice
const options = ['rock', 'paper', 'scissors'];

let computerChoice = "";

function getComputerChoice() {
  computerChoice = options[Math.floor(Math.random() * options.length)];
}

// compare choices
let winner = "";

function checkWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    winner = 'tie';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    winner = 'player';
  } else {
    winner = 'computer';
  }
}




function round() {
  getComputerChoice();
  checkWinner(playerPlays, computerChoice);
  let result = winner;

  if (result === 'tie') {
    logdiv.textContent = `You play ${playerPlays} vs computer plays ${computerChoice}, it's a tie!.`;
  } else if (result === 'player') {
    logdiv.textContent = `You play ${playerPlays} vs computer plays ${computerChoice}, you win the round!`;
  } else {
    logdiv.textContent = `You play ${playerPlays} vs computer plays ${computerChoice}, computer wins the round!`;
  }
  
  game();
}

let userScore = 0;
let computerScore = 0;

function game() {
  if (winner === 'player') {
    userScore++;
    scoreCount.innerHTML = `User score = ${userScore} </br>Computer score = ${computerScore}`;

  } else if (winner === 'computer') {
    computerScore++;
    scoreCount.innerHTML = `User score = ${userScore} </br>Computer score = ${computerScore}`;

  }

  console.log(`Score: Player ${userScore}, Computer ${computerScore}`);

  if (userScore === 5) {
    alert('Game over, you win!');
    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissors.disabled = true;
  } else if (computerScore === 5) {
    alert('Game over, you lose!');
    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissors.disabled = true;
  
   
  }
  
}



//dom log
const logdiv = document.getElementById("log");



//dom Count
const scoreCount = document.getElementById("score");
scoreCount.innerHTML = `User score = ${userScore} <br>Computer score = ${computerScore}`;

