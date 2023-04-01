let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

$(".btn").click(function () {

  let userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  console.log(userClickedPattern);

  playSound(userChosenColour);
});

function nextSequence() {

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

function animatePress(currentColour) {
  $("button").addClass(".pressed");
  setTImeout(function () {
    $("button").removeClass(".pressed")
  }, 100)
}