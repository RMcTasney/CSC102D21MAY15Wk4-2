

function start(){
  // writes to console
  console.log("start button pushed")
  // this disables the start button after it is pushed
  document.getElementById("startButton").disabled = true
  // this enables the stop button after start button is pushed
  document.getElementById("stopButton").disabled = false
  // The rest of this function is dedicated to starting and continuing the countdown timer
  // (don't know if i need to include this and do not know how to program stop button to pause it)
   //count variable to hold the value of the time remaining
   var count = 10;
   // for loop to iterate through the time in seconds and change the count value accordingly
   for (var i = 0; i < 11; i++) {
     
     // if statement to show blastoff when timer reachers 10
     if (i == 10) {
       setTimeout(function () {
         document.getElementById("countdownTimer").innerHTML = "Blastoff!!";
       }, i * 1000);
 
      // else if statement to change line to include half way warning when the timer hits 5 seconds 
     } else if (i > 4) {
       setTimeout(function () {
         document.getElementById("countdownTimer").innerHTML =
           "Warning Less than ½ way to launch, time left = " + count;
       }, i * 1000);
 
     // esle statment to countdown normally until either of the other if statment conditions are true
     } else {
       setTimeout(function () {
         document.getElementById("countdownTimer").innerHTML = count;
         count--;
       }, i * 1000);
     }
   }
}

function stop(){
  //writes to console
  console.log("stop button pushed")
  document.getElementById("stopButton").disabled = true
  document.getElementById("startButton").disabled = false
}


// the following code is for playing sound when the sound button is pressed

// this function is the function the button is linked to 
function playStation(){
  console.log("play station started");

  //this points the instruction to the function below that does the process of uploading and playing the song
  mySound = new sound("us-lab-background.mp3");
  mySound.play(); 
}

// this function carries out the instructions for configuring, uploading, and making the sound audible
function sound(src){
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "audio");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound)

  // this plays the sound
  this.play = function(){
    this.sound.play();
  }

  this.stop = function(){
    this.sound.pause();
  }

}









