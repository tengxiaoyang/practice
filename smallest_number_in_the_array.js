function getNum(arr) {
  var num = arr[0];
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] < num) {
      num = arr[i]
    } 
  }
  console.log(num)
}
