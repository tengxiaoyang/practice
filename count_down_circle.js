var circle = document.getElementById("circle");

var circle_direction = 1;
var circle_wait = 100;
circle.style.width = circle_wait;
circle.style.height = circle_wait;
function time_circle() {
  setTimeout(function(){
    if (circle_wait === 0) {
      circle_direction = -1;
      circle_wait = 1;
    } else {
      circle_wait = circle_wait - 1*direction;
    }
  }, 1000);
  circle.style.width = circle_wait;
  circle.style.height = circle_wait;
}

setInterval("time_circle()", 1000)