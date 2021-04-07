let timerID;

function setAlarm() {
  let alarmTime = document.querySelector("#alarmSet").valueAsNumber;
  let text = document.querySelector("#timeRemaining");

  let currentTime = alarmTime;
  timerID = setInterval(function () {
    if(currentTime === 0) {
      clearInterval(timerID);
      let bodyColor = document.querySelector("body");
      bodyColor.style.backgroundColor = "red";
      playAlarm();
    }
    if (currentTime >= 0) {
      text.innerText = "Time Reamining: 00:" + currentTime;
      console.log(currentTime)
    }
    currentTime = currentTime - 1;

  }, 1000);
}
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
