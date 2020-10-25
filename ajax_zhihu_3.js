var xhr = new XMLHttpRequest();
xhr.open('get', 'https://www.zhihu.com/api/v4/clubs/joined?sortby=visit_count&limit=8');
xhr.onreadystatechange = function(xhr) {
  console.log(xhr);
};
xhr.send();