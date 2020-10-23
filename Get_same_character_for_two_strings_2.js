function Get_same_character_for_two_strings(str, other_str) {
  let arr = str.split("");
  let other_arr = other_str.split("");
  let new_arr = [];
  for (let i = 0; i < arr.length; ++ i) {
    if (other_arr.indexOf(arr[i]) !== -1) {
      new_arr.push(arr[i]);
    }
  }
  let new_str = new_arr.join("");
  return new_str;
}