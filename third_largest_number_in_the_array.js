function getNum(arr) {
  var max = (arr[2] > arr[1] && arr[2] > arr[0] ? arr[2] : arr[1]);
  var sec = (arr[1] > arr[0] && arr[2] > arr[1] ? arr[1] : arr[0]);
  var thi = (arr[1] > arr[0] && arr[2] > arr[0] ? arr[0] : arr[1]);
  for (var i = 3; i < arr.length; ++i) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (max > arr[i] && arr[i] > sec) {
      sec = arr[i];
    } else if (sec > arr[i] && arr[i] > thi) {
      thi = arr[i];
    } 
  }
  return thi;
}
