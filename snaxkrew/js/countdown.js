// Set the date we're counting down to
var countDownDate = new Date("June 21, 2017 10:00:00 PDT").getTime();
var countdownTimer = document.getElementById("countdown-timer");
var daysNumber = countdownTimer.getElementsByClassName("days-number")[0];
var hoursNumber = countdownTimer.getElementsByClassName("hours-number")[0];
var minutesNumber = countdownTimer.getElementsByClassName("minutes-number")[0];
var secondsNumber = countdownTimer.getElementsByClassName("seconds-number")[0];

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // If the count down is over, write some text 
    if (distance <= 1000) {
        // Output the result in an element with id="demo"
        daysNumber.innerHTML = 0;
        hoursNumber.innerHTML = 0;
        minutesNumber.innerHTML = 0;
        secondsNumber.innerHTML = 0;
        clearInterval(x);
        countdownTimer.style.opacity = 0;
        setTimeout(function() {
            countdownTimer.innerHTML = "<span class='time-over'>The gates are open</span>";
            countdownTimer.style.opacity = 1;
        }, 2500);
    } else {
        // Output the result in an element with id="demo"
        daysNumber.innerHTML = days;
        hoursNumber.innerHTML = hours;
        minutesNumber.innerHTML = minutes;
        secondsNumber.innerHTML = seconds;
    }
}, 1000);

