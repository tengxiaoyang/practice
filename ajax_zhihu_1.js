var xhr = new XMLHttpRequest();
xhr.open('get', 'https://www.zhihu.com/commercial_api/banners_v3/home_up?');
xhr.onreadystatechange = function(xhr) {
  console.log(xhr);
};
xhr.send();