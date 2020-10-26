var start_2 = document.getElementById("start_2");

var wait_2 = 100;
start_2.innerHTML = wait_2;
function time_2() {
  if (wait_2 === 0) {
    
  } else {
    -- wait_2;
  }
  start_2.innerHTML = wait_2;
}

setInterval(time_2, 1000)