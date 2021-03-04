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

// 7.查找索引：
[1, 2, 3, 4, 5].indexOf(2)

// 8.连接数组：
const arr_01 = [1, 2, 3]
const arr_02 = [4, 5, 6]
console.log([...arr_01, ...arr_02])

// 9.数组去重：
const arr = [1, 2, 3, 4, 4, 3, 2, 1, 5, 6, 5]
console.log([...new Set(arr)])

