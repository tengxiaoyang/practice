var start = document.getElementById("start");

var wait = 100;
start.innerHTML = wait;
function time() {
  -- wait;
  start.innerHTML = wait;
}

setInterval(time, 1000)