
// All the sounds from the sounds folders are stored in the various variables.
var red = new Audio("sounds/red.mp3");
var blue = new Audio("sounds/blue.mp3");
var yellow = new Audio("sounds/yellow.mp3");
var green = new Audio("sounds/green.mp3");
var wrong = new Audio("sounds/wrong.mp3");




$(".box").on("click", function () {
  var id = $(this).attr("id");    //This will helps us to get id from the clicked event.

  

  switch(id)   // If id matches, then it will play the respected sound.
  {
    case "red":
      red.play();
      break;
    case "blue":
      blue.play();
      break;
    case "yellow":
      yellow.play();
      break;
    case "green":
      green.play();
      break;
  }


  // Below coding manages the button animations.
  $("#" + id)
    .fadeOut(100)
    .fadeIn(100)
    .addClass("pressed")
    .removeClass("pressed");


    //For some interesting reasons random will generate various numbers.
  var randomNumber = Math.floor(Math.random() * 4);

  var randomColors = ["red", "blue", "yellow", "green"];
  
  var randomChosenColor = randomColors[randomNumber];
  
  if (id === randomChosenColor)    // It checks the Id and the chosen color's name. If it matches to that then it will add succeed class and later it eill be removed. 
  {  
      $("body").addClass("succeed");
      document.querySelector("h1").innerText="Succeed!";

      setTimeout(function()
      {
          $("body").removeClass("succeed");
          document.querySelector("h1").innerText="Press Any Button To Play";
      },800);
  }
  else    // Else failure Css class will be added and later it will be removed.
  {
    $("body").addClass("failure");
      document.querySelector("h1").innerText="Game Over!";

      setTimeout(function()
      {
          $("body").removeClass("failure");
          document.querySelector("h1").innerText="Press Any Button To Play";
      },800);

    wrong.play();
    console.log("Random color=" + randomChosenColor + " id=" + id);
  }
});



