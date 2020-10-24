var a = 1;
function test() {
  a = a + 1;
  return function() {
    var a = 10;
    return a;
  }
}
console.log(a);
var get = test();
console.log(a);
console.log(a);
/*
*预解析：
*全局作用域：a = undefined; get = undefined; [scope] = null;
*函数作用域：[scope] = 全局作用域;
*匿名函数作用域：a = undefined; [scope] = 函数作用域;
*
*执行：
*在全局作用域, 赋值a = 1; 函数声明不执行; 打印1; 赋值get = test()执行函数, 在函数作用域找不到a, 上一层作用域赋值a = 2; 在全局作用域, 打印2; 打印2;
*
*打印：1; 2; 2;
*/
