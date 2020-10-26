var start = document.getElementById("start");

var wait = 100;
start.innerHTML = wait;
function time() {
  -- wait;
  start.innerHTML = wait;
  setTimeout(time, 1000);
}

time();