var circle = document.getElementById('circle');
var circle_direction = 1;
var circle_wait = 20;

function time_circle() {
  if (circle_wait === 100) {
    circle_direction = -1;
    circle_wait = 99;
  } else {
    circle_wait = circle_wait + 1*circle_direction;
  }
  circle.style.width = circle_wait;
  circle.style.height = circle_wait;
  circle.style.borderRadius = circle_wait + 'px';
}

var timer;

circle.onclick = function start() {
  if (timer) {
    clearInterval(timer);
    timer = undefined;
    console.log("1")
  } else {
    timer = setInterval(time_circle, 100);
    console.log("2")
  }
}