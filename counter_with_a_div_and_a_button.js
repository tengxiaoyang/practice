var start_2 = document.getElementById("display");

var wait_2 = 100;
start_2.innerHTML = wait_2 + "s";
function time_2() {
  if (wait_2 === 0) {
    clearInterval(begin);
  } else {
    -- wait_2;
  }
  start_2.innerHTML = wait_2 + "s";
}

var counter_btn = document.getElementById('counter_btn');
counter_btn.onclick = function begin() {
  setInterval(time_2, 1000)
};