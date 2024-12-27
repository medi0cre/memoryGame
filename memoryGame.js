var gameState = "waitingForFirstSelection",
  firstSelection,
  secondSelection,
  attempt = 5;

function waitThreeSeconds(button1, button2) {
  setTimeout(() => {
    button1.style.opacity = "1";
    button2.style.opacity = "1";
  }, 3000);
}

function displayOnScreen(text) {
  var att = document.querySelector(".attempt");
  att.textContent = text;
}

function disableAllButtons() {
  var buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function gameOverCheck() {
  var buttonOne = document.querySelector(".one");
  var buttonTwo = document.querySelector(".two");
  var buttonThree = document.querySelector(".three");
  var buttonFour = document.querySelector(".four");
  var buttonFive = document.querySelector(".five");
  var buttonSix = document.querySelector(".six");
  var buttonSeven = document.querySelector(".seven");
  var buttonEight = document.querySelector(".eight");
  var buttonNine = document.querySelector(".nine");
  var buttonTen = document.querySelector(".ten");
  var buttonEleven = document.querySelector(".eleven");
  var buttonTwelve = document.querySelector(".twelve");

  if (
    buttonOne.style.opacity == "0" &&
    buttonTwo.style.opacity == "0" &&
    buttonThree.style.opacity == "0" &&
    buttonFour.style.opacity == "0" &&
    buttonFive.style.opacity == "0" &&
    buttonSix.style.opacity == "0" &&
    buttonSeven.style.opacity == "0" &&
    buttonEight.style.opacity == "0" &&
    buttonNine.style.opacity == "0" &&
    buttonTen.style.opacity == "0" &&
    buttonEleven.style.opacity == "0" &&
    buttonTwelve.style.opacity == "0"
  ) {
    console.log("winner");
    disableAllButtons();
    displayOnScreen("You Win!");
  } else if (attempt == 0) {
    console.log("Loser");
    disableAllButtons();
    displayOnScreen("You Lose");
  } else console.log("keepPlaying");
}

var buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (gameState == "waitingForFirstSelection") {
      firstSelection = button;
      button.disabled = true;
      button.style.opacity = "0";
      gameState = "waitingForSecondSelection";
    } else {
      button.style.opacity = "0";
      firstSelection.disabled = false;
      gameState = "waitingForFirstSelection";
      secondSelection = button;
      if (secondSelection.value == firstSelection.value) {
        gameOverCheck();
      } else {
        attempt -= 1;
        displayOnScreen("Attempt = " + attempt);
        gameOverCheck();
        waitThreeSeconds(firstSelection, secondSelection);
      }
    }
  });
});