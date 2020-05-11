const birthday = "May 11, 2020 12:00:00";

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

$(document).ready(function() {
  let countDown = new Date(birthday).getTime();
  let x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    document.getElementById("days").innerText = Math.floor(distance / day);

    document.getElementById("hours").innerText = Math.floor(
      (distance % day) / hour
    );
    document.getElementById("minutes").innerText = Math.floor(
      (distance % hour) / minute
    );
    document.getElementById("seconds").innerText = Math.floor(
      (distance % minute) / second
    );

    if (distance <= 0) {
      clearInterval(x);
      document.getElementById("days").innerText = 0;
      document.getElementById("hours").innerText = 0;
      document.getElementById("minutes").innerText = 0;
      document.getElementById("seconds").innerText = 0;
      $('#countdown').remove();
      window.location.assign("cake.html");
      }
  }, second); //setInterval()

}); //doc.ready()
