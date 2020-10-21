function remove_duplicate(arr) {
  var new_arr = []
  for (var i = 0; i < arr.length; ++ i) {
    if (new_arr.indexOf(arr[i]) === -1) {
      new_arr.push(arr[i]);
    }
  }
  arr = new_arr;
  return arr;
}