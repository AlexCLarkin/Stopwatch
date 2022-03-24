window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
    var updateClockTimer = 0;
    updateClock();


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
      
      if(tens <= 9){
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

    function updateClock() {
      updateClockTimer++;
      var currentTime = new Date()
     var hours = currentTime.getHours()
     var minutes = currentTime.getMinutes()

     if (minutes < 10){
      minutes = "0" + minutes
  }
     var t_str = hours + ":" + minutes + " ";
     if(hours > 11){
         t_str += "PM";
     } else {
        t_str += "AM";
     }
     if (0 < updateClockTimer) {
      updateClockTimer = updateClockTimer + 1;
      document.getElementById('time_span').innerHTML = t_str;
     setTimeout(time,1000);
    }
    }
      }