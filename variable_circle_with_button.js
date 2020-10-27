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



circle.onclick = function start() {
  var wid = circle.style.width;
  if (wid > 20) {
    clearInterval(start);
  } else {
    setInterval(time_circle, 100);
  }
}