function btn_color() {
  var rdm_1 = Math.round(Math.random()*255);
  var rdm_2 = Math.round(Math.random()*255);	
  var rdm_3 = Math.round(Math.random()*255);	
  var color_1 = "rgb("+rdm_1+","+rdm_2+","+rdm_3+")";
  var color_2 = "rgb("+rdm_1+","+rdm_2+","+rdm_3+")";
  return [color_1, color_2];
};
var border_btn = document.getElementById('border_btn');
border_btn.onclick = () => {
  border_btn.style.borderColor = btn_color()[0];
  border_btn.style.backgroundColor = btn_color()[1];
};