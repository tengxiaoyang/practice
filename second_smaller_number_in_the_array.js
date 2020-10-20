function getNum(a) {
  var arr = a;
  var num = arr[0];
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] < num) {
      num = arr[i];
    } 
  }

  var del_index = arr.indexOf(num);
  arr.splice(del_index, 1);

  num = arr[0];
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] < num) {
      num = arr[i];
    } 
  }
  console.log(num);
}
