function Get_same_character_for_two_strings(str, other_str) {
  let arr = str.split("");
  let other_arr = other_str.split("");
  let new_arr = [];
  let new_str = '';
  for (let i = 0; i < arr.length; ++ i) {
    for (let j = 0; j < other_arr.length; ++ j) {
      if (arr[i] === other_arr[j]) {
        new_arr.push(arr[i]);
      }
    }
  }
  for (let i = 0; i < new_arr.length; ++ i) {
    new_str += new_arr[i];
  }
  return new_str;
}