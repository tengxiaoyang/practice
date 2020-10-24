function ordered_array_two_Num_equal_to_target(arr, target) {
  let obj = {};
  for (var i = 0; i < arr.length; ++ i) {
      var num_1 = arr[i];
      if (obj[num_1] === undefined) {
          var num_2 = target - num_1;
          obj[num_2] = i;
      } else {
        return [obj[num_1], i];
      }
  }
  return -1;
}