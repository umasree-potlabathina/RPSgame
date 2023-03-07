function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomChoice = options[Math.floor(Math.random() * options.length)];
  return randomChoice;
}

function getResult(playerChoice, computerChoice) {
  let score;
  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    score = 1;
  } else {
    score = -1;
  }

  return score;
}

function showResult(score, playerChoice, computerChoice) {

  const scoreDiv = document.getElementById("player-score");
  scoreDiv.innerText = `${Number(scoreDiv.innerText) + score}`;

  const choiceDiv = document.getElementById("hands")
  choiceDiv.innerText = `😀 : ${playerChoice}\n🤖 : ${computerChoice}`;

  const resultDiv = document.getElementById("result");
  if (score === 0) {
    resultDiv.innerText = "It's a Draw!";
  } else if (score === 1) {
    resultDiv.innerText = "You Win!";
  } else {
    resultDiv.innerText = "You Lose!";
  }

}


function onClickRPS(playerChoice) {
 const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  showResult(score,playerChoice, computerChoice)
}

function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll(".rpsButton")

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => {
      onClickRPS(rpsButton.value);
    }
  })

  const endGameDiv = document.getElementById("endGameButton");
  endGameDiv.onclick = () => endGame();
}

function endGame() {
  let scoreDiv = document.getElementById("player-score");
  let choiceDiv = document.getElementById("hands");
  let resultDiv = document.getElementById("result");

  scoreDiv.innerText = "";
  choiceDiv.innerText = "";
  resultDiv.innerText = "";
}

playGame();