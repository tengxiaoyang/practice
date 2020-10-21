function Fibornacci_Search(target) {
  let arr = [1, 1];
  for (let i = 0; i <= target-1; ++ i) {
    arr.push(arr[i] + arr[i + 1]);
  }
  return arr[target-1];
}