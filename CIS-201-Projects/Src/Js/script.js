function startCountDown(){
    if(document.getElementById("daysafter").value == null || document.getElementById("daysafter").value == ""){
      document.getElementById("error").style.display='';
      document.getElementById("error").innerHTML="Please select days first!!!"
    }else{
      document.getElementById("error").style.display='none';
      document.getElementById("headline").style.display='';
      document.getElementById("countdown").style.display='';
      document.getElementById("daysafter").style.display='none';
      document.getElementById("button").style.display='none';
      document.getElementById("header").style.display='none';
      
        (function () {
          const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;
      
          var today = new Date();
          let number_days =  parseInt(document.getElementById("daysafter").value);
          today.setDate(today.getDate() +number_days);
              countDown = new Date(today).getTime(),
              x = setInterval(function() {    
      
                let now = new Date().getTime(),
                    distance = countDown - now;
      
                  document.getElementById("days").innerText = Math.floor(distance / (day)),
                  document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                  document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                  document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
                if (distance < 0) {
                  let headline = document.getElementById("headline"),
                      countdown = document.getElementById("countdown"),
                      content = document.getElementById("content");
      
                  headline.innerText = "Count Down ended!!!";
                  countdown.style.display = "none";
                  content.style.display = "block";
      
                  clearInterval(x);
                }
              }, 0)
          }());
    }

 }