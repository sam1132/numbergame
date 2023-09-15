"use strict";
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let hiddenNumber = document.querySelector(".number");
let displayMessage = document.querySelector(".message");
let checkBtn = document.querySelector(".btn");
let displayScore=document.querySelector('.score');
let highScore= document.querySelector('.highscore')
const againBtn = document.querySelector('.btnagain')
let score = 20;
let highscore = 0;

checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

if (!guess) {
  displayMessage.textContent = "No number ";
} else if (guess === secretNumber) {
  hiddenNumber.textContent = secretNumber;
  displayMessage.textContent='Correct Answer';
  if(score>highscore){
    highScore.textContent=score;
  }
} else if (guess !== secretNumber) {
    if (score > 1) {
        displayMessage.textContent= guess > secretNumber ?'Too High':'Too Low'
        score--;
        displayScore.textContent = score;
      } else {
        displayMessage.textContent="You Lost the game"
        displayScore.textContent=0
      }
}
});

againBtn.addEventListener('click',function(){
    score=20;
    displayMessage.textContent='Start Guessing...';
    displayScore.textContent=score;
    hiddenNumber.textContent='?'
    document.querySelector('.guess').value='';
});