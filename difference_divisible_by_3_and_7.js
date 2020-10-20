function getNum(arr) {
  var sum_3 = 0;
  var sum_7 = 0;
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] % 3 === 0) {
      sum_3 += arr[i]
    }
    if (arr[i] % 7 === 0) {
      sum_7 += arr[i]
    }
  }
  var num = sum_3 - sum_7
  console.log(num)
}
