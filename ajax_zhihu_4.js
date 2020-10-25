var xhr = new XMLHttpRequest();
xhr.open('get', 'https://www.zhihu.com/api/v4/creator/apply');
xhr.onreadystatechange = function(xhr) {
  console.log(xhr);
};
xhr.send();