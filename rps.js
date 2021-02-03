let wins = 0;
let losses = 0;
function winTrack(result) {
  if (result === 'win') {
    wins += 1;
  } else if (result === 'loss') {
    losses += 1;
  }
}
  
  function computerPlay() {
    let ranNum = Math.floor((Math.random() * 3) + 1);
    if (ranNum === 1) {
      return "Rock";
    } else if (ranNum === 2) {
      return "Paper";
    } else {
      return "Scissors";
    }
  }
  function playRound(playerSelection, computerSelection) {
    //first make both inputs lowercase to handle weird input cases and 
    //allow comparisons
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    //check for ties - cases must much for equality operator to return true
    //then run through the various other possibilites and return correct string
    const div = document.querySelector("#results");
    if (playerChoice === computerChoice) {
      div.textContent = `Are you a computer? You both threw ${computerSelection}, so you tied!`;
      return "tie";
    } else if (playerChoice === "rock" && computerChoice === "paper")  {
      div.textContent = "Sorry loser, Paper covers Rock!";
      return "loss";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
      div.textContent = "Excellent decision sir, Rock SMASHES Scissors!";
      return "win";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      div.textContent = "Paper truly is mightier than a stone! Victory!";
      return "win";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      div.textContent = "Did you really think PAPER could win? Scissors CUT you";
      return "loss";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      div.textContent = "You've been smashed to bits! LOSE";
      return "loss";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      div.textContent = "You were made for this, forged for this... Scissors easilly cut Paper!";
      return "win";
    }  
  }
const btns = Array.from(document.querySelectorAll('button'));
btns.forEach(btn => btn.addEventListener('click', function(e) {
  winTrack(playRound(this.id, computerPlay()));
}))