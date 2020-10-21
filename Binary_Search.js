function Binary_Search(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    if (target > arr[mid]) {
      left = mid + 1;
      mid = Math.floor((left + right) / 2);
    } else if (target < arr[mid]) {
      right = mid - 1;
      mid = Math.floor((left + right) / 2);
    } else {
      return mid;
    }
  }
  return -1;
}