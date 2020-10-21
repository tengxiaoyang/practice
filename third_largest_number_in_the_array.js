function getNum(arr) {
  var max = (arr[1] > arr[0] ? arr[1] : arr[0]);
  var sec = (arr[1] > arr[0] ? arr[0] : arr[1]);
  var thi = 0;
  if (arr[2] > max) {
    thi = sec;
    sec = max;
    max = arr[2];
  } else if (arr[2] > sec && arr[2] < max) {
    thi = sec;
    sec = arr[2];
  } else if (arr[2] < sec) {
    thi = arr[2];
  }

  for (var i = 3; i < arr.length; ++i) {
    if (arr[i] > max) {
      thi = sec;
      sec = max;
      max = arr[i];
    } else if (max > arr[i] && arr[i] > sec) {
      thi = sec;
      sec = arr[i];
    } else if (sec > arr[i] && arr[i] > thi) {
      thi = arr[i];
    } 
  }
  return thi;
}
