function getNum(arr) {
  var arr_2 = []

  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] %2 === 0) {
      arr_2.push(arr[i]);
    } 
  }

  var num = arr_2[0];
  for (var i = 0; i < arr_2.length; ++i) {
    if (arr_2[i] > num) {
      num = arr_2[i];
    } 
  }
  console.log(num);
}
