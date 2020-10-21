function getNum(arr) {
  var max = (arr[0] < arr[1] ? arr[1] : arr[0]);
  var sec = (arr[0] < arr[1] ? arr[0] : arr[1]);
  for (var i = 2; i < arr.length; ++i) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (max > arr[i] && arr[i] > sec) {
      sec = arr[i];
    } else {

    }
  }
  return sec;
}
