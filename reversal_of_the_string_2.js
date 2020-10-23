function reversal_of_the_string(str) {
  let arr = str.split("")
  let new_str = '';
  let new_arr = [];
  for (let i = str.length-1; i >= 0; -- i) {
    new_arr.push(arr[i]);
  }
  for (let i = 0; i < new_arr.length; ++ i) {
    new_str += new_arr[i];
  }
  return new_str;
}