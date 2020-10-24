function unordered_array_two_Num_equal_to_target(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; ++ i) {
    if (arr[i] < target) {
      let other_num = target - arr[i];
      if (arr.indexOf(other_num) !== -1) {
        if (arr.lastIndexOf(other_num) !== arr.indexOf(arr[i])) {
          let data = [];
          result = data.concat(arr[i], other_num);
        }
      }
    }
  }
  return result;
}