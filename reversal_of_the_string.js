function reversal_of_the_string(str) {
  let arr = str.split("")
  let new_str = '';
  let new_arr = [];
  for (let i = 0; i < str.length; ++ i) {
    new_arr.unshift(arr[i]);
  }
  for (let i = 0; i < new_arr.length; ++ i) {
    new_str += new_arr[i];
  }
  return new_str;
}