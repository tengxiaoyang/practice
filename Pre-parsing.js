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
*预解析：
*全局作用域：num = undefined; get = undefined; [scope] = null;
*函数作用域：num = undefined; [scope] = 全局作用域;
*匿名函数作用域：[scope] = 函数作用域;
*
*执行：
*在全局作用域，赋值num = 0; 函数声明不执行; 打印0; 赋值get = test()执行函数, 在函数作用域，打印undefined; 赋值num = 1; 打印1; 在全局作用域，打印get()执行匿名函数, 当前匿名函数作用域找不到num, 在上一层作用域赋值num = 5，因为匿名函数没有return, 所以全局作用域打印undefined; 在全局作用域, 打印0;
*
*打印：0; undefined; 1; undefined; 0;
*/
