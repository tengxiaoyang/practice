function ordered_array_two_Num_equal_to_target(arr, target) {
  let result = [];
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    if (arr[left] + arr[right] === target) {
      let data = [];
      result = data.concat(arr[left], arr[right]);
      return result;
    } else if (arr[left] + arr[right] < target) {
      ++ left;
    } else if (arr[left] + arr[right] > target) {
     -- right;
    } 
  }
  return -1;
}