// 一、数组：

// 1.遍历数组：
[1, 2, 3, 4, 5].forEach(function(value, index) {
  console.log(value)
})

// 2.映射新数组：
const arr = [1, 2, 3, 4, 5].map(n => n*n)

// 3.是否所有元素通过测试：
[1, 2, 3, 4, 5].every(n => n > 3)

// 4.是否有元素通过测试：
[1, 2, 3, 4, 5].some(n => n > 3)

// 5.过滤数组：
[1, 2, 3, 4, 5].filter(n => n > 3)

// 6.查找符合条件的元素：
const arr = [
  {name: 'pangpang', age: 23}, 
  {name: 'xiaopang', age: 18},
  {name: 'fanfan', age: 35},
]
console.log(arr.filter(item => item.age > 20))



