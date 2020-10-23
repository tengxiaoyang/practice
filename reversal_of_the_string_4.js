function reversal_of_the_string(str) {
  let arr = str.split("");
  let new_arr = arr.reverse();
  let new_str = new_arr.join("");
  return new_str;
}