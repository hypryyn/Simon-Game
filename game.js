let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let started = false;

let level = 0;

let userClickedPattern = [];

$(document).keydown(function () {

  if (!started) {
    $("level-title").text("Level" + level);
    nextSequence();
    started = true;
  }

})

$(".btn").click(function () {

  let userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  console.log(userClickedPattern);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);

});

function checkAnswer(currentLevel) {
  if(gamePattern(currentLevel) === userClickedPattern(currentLevel)){
  console.log("succes");
} if (userClickedPattern.length === gamePattern.length) {
    setTimeout(() => {
      nextSequence();
    }, 1000);
} else {
  console.log("wrong");
}
}  



function nextSequence() {

  userClickedPattern = [];

  level++;

  $("level-title").text("level" + level);

  let randomNumber = Math.floor(Math.random() * 4);

  let randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);


  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

}

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
