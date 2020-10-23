function reversal_of_the_string(str) {
  let arr = str.split("");
  let new_arr = [];
  for (let i = 0; i < str.length; ++ i) {
    new_arr.push(arr[i]);
  }
  let new_str = '';
  for (let i = 0; i < new_arr.length; ++ i) {
    new_str = new_arr[i] + new_str;
  }
  return new_str;
}