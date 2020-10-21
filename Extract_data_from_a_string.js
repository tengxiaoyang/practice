function Extract_data_from_a_string(url) {
  let question_mark_index = url.indexOf("?");
  let url_right = url.substring(question_mark_index + 1, url.length);
  let url_right_without_and = url_right.split("&");
  let live = url_right_without_and[0];
  let name = url_right_without_and[1];
  let course = url_right_without_and[2];
  let live_without_equal = live.split("=");
  let name_without_equal = name.split("=");
  let course_without_equal = course.split("=");
  live_without_equal.splice(1,0,"=");
  name_without_equal.splice(1,0,"=");
  course_without_equal.splice(1,0,"=");
  let data = live_without_equal.concat(name_without_equal, course_without_equal);
  return data;
}