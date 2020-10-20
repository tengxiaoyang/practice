var num = 0;
var i = 1;
while (i <= 100) {
  if (i % 7 == 0) {
    num += i
  }
  ++i;
}
console.log(num)