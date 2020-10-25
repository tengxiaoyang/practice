function ordered_array_two_Num_equal_to_target(arr, target) {
  let obj = {};
  for (var i = 0; i < arr.length; ++ i) {
      var num = arr[i];
      if (obj[num] === undefined) {
          var other_num = target - num;
          obj[other_num] = i;
      } else {
        return [obj[num], i];
      }
  }
  return -1;
}