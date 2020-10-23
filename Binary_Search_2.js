function Binary_Search(arr, target) {
  for (let left = 0; left < arr.length; ++ left) {
    for (let right = 0; right < arr.length; ++ right) {
      if (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target > arr[mid]) {
          left = mid + 1;
        } else if (target < arr[mid]) {
          right = mid - 1;
        } else {
          return mid;
        }
      }
    }
  }
  return -1;
}