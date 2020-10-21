function Binary_Search(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target > arr[mid]) {
      left = mid + 1;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}