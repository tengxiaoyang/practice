function getNum(arr) {
  var min = (arr[0] < arr[1] ? arr[0] : arr[1]);
  var sec = (arr[0] < arr[1] ? arr[1] : arr[0]);
  for (var i = 2; i < arr.length; ++i) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (min < arr[i] && arr[i] < sec) {
      sec = arr[i];
    } else {

    }
  }
  return sec;
}
