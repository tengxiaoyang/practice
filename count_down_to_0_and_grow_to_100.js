var start_3 = document.getElementById("start_3");

var direction = 1;
var wait_3 = 100;
start_3.innerHTML = wait_3;
function time_3() {
  if (wait_3 === 0) {
    direction = -1;
    wait_3 = 1;
  } else if (wait_3 === 101) {
    wait_3 = 100;
  } else {
    wait_3 = wait_3 - 1*direction;
  }
  start_3.innerHTML = wait_3;
}

setInterval(time_3, 1000)