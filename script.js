window.onload = function () {
  
  let seconds = 00; 
  let tens = 00; 
  let appendTens = document.getElementById("tens")
  let appendSeconds = document.getElementById("seconds")
  let buttonStart = document.getElementById('button-start');
  let buttonStop = document.getElementById('button-stop');
  let buttonReset = document.getElementById('button-reset');
  let Interval;

  buttonStart.onclick = function() {
     clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  }
  
  function startTimer () {
    tens++; 
    
    if(tens < 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  }
}



let r = 0;
$('.link').click(function(e) {
  $('body').css("background", $(this).css("background"));
});

$('.pick').click(function(e) {
  let j = 1;
  $('.fab').css("background", color[r][0]);
  $('.link').each(function(f) {
    $(this).css("background", color[r][j]);
    j++;
  });
  if (r < color.length - 1)
    r++;
  else
    r = 0;
});

let color = [
  [
    "#b71c1c",
    "#ffcdd2",
    "#ef9a9a",
    "#ef5350",
    "#e53935",
    "#c62828"
  ],
  [
    "#0d47a1",
    "#bbdefb",
    "#64b5f6",
    "#2196f3",
    "#1976d2",
    "#1565c0"
  ],
  [
    "#1b5e20",
    "#c8e6c9",
    "#81c784",
    "#4caf50",
    "#388e3c",
    "#2e7d32"
  ],
  [
    "#ff6f00",
    "#ffecb3",
    "#ffd54f",
    "#ffc107",
    "#ffa000",
    "#ff8f00"
  ],
];