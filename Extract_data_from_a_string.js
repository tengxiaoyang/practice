function Extract_data_from_a_string(url) {
  let question_mark_index = url.indexOf("?");
  let url_right = url.substring(question_mark_index + 1, url.length);
  let url_right_without_and = url_right.split("&");
  let url_1 = ""
  for (let i = 0; i < url_right_without_and.length; ++ i) {
    url_1 += url_right_without_and[i].replace("=", ",=,") + ",";
  }
  let url_2 = url_1.split(",");
  url_2.pop()
  return url_2;
}