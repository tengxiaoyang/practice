var start = document.getElementById("start");

var wait = 100;
start.innerHTML = wait;
function time() {
  setTimeout(function(){
    -- wait;
  }, 1000);
  start.innerHTML = wait;
}

setInterval("time()", 1000)