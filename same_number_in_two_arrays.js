function getNum(arr, other_arr) {
  var new_arr = [];
  for (var i = 0; i < arr.length; ++ i) {
    for (var j = 0; j < other_arr.length; ++ j) {
      if (arr[i] === other_arr[j] && new_arr.indexOf(arr[i]) === -1) {
        new_arr.push(arr[i]);
      }
    }
  }
  return new_arr;
}
