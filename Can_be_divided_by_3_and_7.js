function getNum(arr) {
  var num = 0;
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] % 3 === 0) {
      if (arr[i] % 7 === 0) {
        ++ num
      }
    }
  }
  console.log(num)
}
