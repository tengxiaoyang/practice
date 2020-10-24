function unordered_array_two_Num_equal_to_target(arr, target) {
  let data = [];
  let result = [];
  for (let i = 0; i < arr.length; ++ i) {
    for (let j = 0; j < arr.length; ++ j) {
      if (arr[i] + arr[j] === target && i !== j) {
        result = data.concat(arr[i], arr[j]);
      }
    }
  }
  return result;
}