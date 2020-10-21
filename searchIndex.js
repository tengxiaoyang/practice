function searchIndex(arr, target) {
  for (var i = 0; i < arr.length; ++ i) {
    if (target === arr[i]) {
      return i;
    }
  }
}