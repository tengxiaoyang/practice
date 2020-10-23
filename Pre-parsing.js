var num = 0;
function test() {
  console.log(num);
  var num = 1;
  console.log(num);
  return function() {
    num = 5;
  }
}
console.log(num);
var get = test();
console.log(get());
console.log(num);
/*
*全局: num = undefined; test = function; get = undefined; [scope] => null;
test: num = undefined; 匿名函数 = function; [scope];
匿名函数：num = undefined; [scope];
结果: 0; undefined; 0;
*/
