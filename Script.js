var timer = 60;
var score = 0;
var newHitValue = 0;

function runTimer() {
  var timerInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector(".timer-Box").textContent = timer;
    } else {
      clearInterval(timerInterval);
      document.querySelector(".panel-bottom").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}
function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 133; i++) {
    var randNo = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">
    <h3>${randNo}</h3>
</div>`;
  }

  document.querySelector(".panel-bottom").innerHTML = clutter;
}
function hitCard() {
  newHitValue = Math.floor(Math.random() * 10);
  document.querySelector(".hit-val").textContent = newHitValue;
}

function increaseScore() {
  score += 10;
  document.querySelector("#score-box").textContent = score;
}

var listner = document.querySelector(".panel-bottom");
listner.addEventListener("click", function (dets) {
  var number = Number(dets.target.textContent);
  if (newHitValue === number) {
    increaseScore();
    makeBubble();
    hitCard();
  }
});

makeBubble();
runTimer();
hitCard();
