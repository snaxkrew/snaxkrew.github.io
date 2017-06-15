// Set the date we're counting down to
var countDownDate = new Date("June 21, 2017 00:00:00").getTime();
// var countDownDate = new Date("June 15, 2017 00:00:00").getTime();
var countdownTimer = document.getElementById("countdown-timer");

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
    
    // Output the result in an element with id="demo"
    countdownTimer.getElementsByClassName("days-number")[0].innerHTML = days;
    countdownTimer.getElementsByClassName("hours-number")[0].innerHTML = hours;
    countdownTimer.getElementsByClassName("minutes-number")[0].innerHTML = minutes;
    countdownTimer.getElementsByClassName("seconds-number")[0].innerHTML = seconds;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        countdownTimer.innerHTML = "MXM launches today!";
    }
}, 1000);

